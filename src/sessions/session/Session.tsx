import SessionInformation from "./SessionInformation";
import React, {useEffect, useState} from "react";
import Error from "../../Error";
import Loading from "../../Loading";
import SessionBigData from "../../interfaces/SessionBigData";
import DriverInformation from "./DriverInformation";
import LapTable from "./LapTable";
import UseAPI from "../../api/UseAPI";
import Car from "../../interfaces/Car";
import {Lap} from "../../interfaces/Lap";
import Driver from "../../interfaces/Driver";

export interface propId {
  id: string
}

export default function Session({id}: propId) {
  const [data, setData] = useState({
    session: {},
    cars: [] as Car[],
    laps: [] as Lap[],
    drivers: [] as Driver[]
  } as SessionBigData);

  const useAPI = UseAPI('getSession', id)

  useEffect(() => {
    async function compileData() {
      const temp: SessionBigData = useAPI.data[0]
      if (!useAPI.isLoading) {
        temp.session.bestLapTime = Number.MAX_VALUE
        temp.drivers?.forEach(driver => {
          driver.bestLapTimeNum = Number.MAX_VALUE
          temp.laps?.forEach(lap => {
            if (driver.id === lap.driverId && lap.lapTime < driver.bestLapTimeNum) {
              driver.bestLapTimeNum = lap.lapTime;
              driver.bestLapTime = lap.lapTimeFormatted;

              if (lap.lapTime < temp.session.bestLapTime) {
                temp.session.bestLapTimeFormatted = lap.lapTimeFormatted
                temp.session.bestLapTime = lap.lapTime
                temp.session.bestDriver = (driver.shortName + " " + driver.firstName + " " + driver.lastName)
              }
            }
          });
        })

        temp.laps?.forEach(lap => {
          if (lap.lapTime === temp.session.bestLapTime) {
            lap.fastestLap = true;
          }
        });

        setData(temp)
      }
    }

    compileData();
  }, [useAPI.isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  if (useAPI.isLoading) {
    return <Loading/>
  }

  if (useAPI.error.length > 0) {
    return (
      <Error msg={useAPI.error}/>
    );
  }

  if (data.session != null && data.drivers != null && data.drivers.length > 0) {
    return (
      <div>
        <div className="flex flex-row w-full">
          <div className="grid h-auto card bg-base-300 rounded-box place-items-center mb-3">
            <SessionInformation created_at={data.session.created_at} id={data.session.id}
                                metaData={data.session.metaData} raceWeekendIndex={data.session.raceWeekendIndex}
                                serverName={data.session.serverName} sessionIndex={data.session.sessionIndex}
                                sessionType={data.session.sessionType} trackName={data.session.trackName}
                                updated_at={data.session.updated_at} bestLapTime={data.session.bestLapTime}
                                bestLapTimeFormatted={data.session.bestLapTimeFormatted}
                                bestDriver={data.session.bestDriver}/>
          </div>
          <div className="overflow-x-auto mb-3 ml-5 col-span-4 bg-base-300 p-4 rounded-box w-full">
            <table className="table-zebra table w-full">
              <thead>
              <tr>
                <th>Driver</th>
                <th>Name</th>
                <th>Shortname</th>
                <th>Best lap time</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {data.drivers.map(x =>
                <DriverInformation created_at={x.created_at} firstName={x.firstName} id={x.id} lastName={x.lastName}
                                   playerId={x.playerId} shortName={x.shortName} updated_at={x.updated_at}
                                   bestLapTime={x.bestLapTime} bestLapTimeNum={x.bestLapTimeNum}/>
              )}
              </tbody>
            </table>
          </div>
        </div>

        <LapTable session={data.session} cars={data.cars} drivers={data.drivers}/>
      </div>
    );
  }

  return (
    <div/>
  );
}
