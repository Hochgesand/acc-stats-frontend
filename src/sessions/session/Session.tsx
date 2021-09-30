import SessionInformation from "./SessionInformation";
import useGetRequest from "../../api/useGetRequest";
import React, {useEffect, useState} from "react";
import Error from "../../Error";
import {BackendEndpointSession} from "../../api/endpoints";
import Loading from "../../Loading";
import SessionBigData from "../../interfaces/sessionData/SessionBigData";
import Driver from "../../interfaces/sessionData/Driver";
import Car from "../../interfaces/sessionData/Car";
import DriverInformation from "./DriverInformation";
import LapTable from "./LapTable";
import {Lap} from "../../interfaces/sessionData/Lap";

export interface propId {
  id: string
}

export default function Session({id}: propId) {
  const [data, setData] = useState({session: {}, cars: [] as Car[], laps: [] as Lap[], drivers: [] as Driver[]} as SessionBigData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  const {getData} = useGetRequest({path: `${BackendEndpointSession}/${id}`})

  useEffect(() => {
      async function fetchData() {
        await getData().then(function (json){
          let temp: SessionBigData = json;

          temp.drivers?.forEach(driver => {
            driver.bestLapTimeNum = Number.MAX_VALUE
            temp.session.bestLapTime = Number.MAX_VALUE
            temp.laps?.forEach(lap => {
              if (driver.id === lap.driverId && lap.lapTime < driver.bestLapTimeNum){
                driver.bestLapTimeNum = lap.lapTime;
                driver.bestLapTime = lap.lapTimeFormatted;
                if (lap.lapTime < temp.session.bestLapTime){
                  temp.session.bestLapTimeFormatted = lap.lapTimeFormatted
                }
              }
            });
          })

          setData(temp);
          setLoading(false)
        }).catch( err =>{
            setError(err.message)
            setLoading(false);
          }
        );
      }
      fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading){
    return <Loading/>
  }

  if (error.length > 0){
    return(
      <Error msg={error}/>
    );
  }

  if (data.session != null && data.drivers != null){
    return (
      <div className={"p-5"}>
        <div className="flex flex-row w-full">
          <div className="grid h-auto card bg-base-300 rounded-box place-items-center mb-3 p-2">
            <SessionInformation created_at={data.session.created_at} id={data.session.id} metaData={data.session.metaData} raceWeekendIndex={data.session.raceWeekendIndex} serverName={data.session.serverName} sessionIndex={data.session.sessionIndex} sessionType={data.session.sessionType} trackName={data.session.trackName} updated_at={data.session.updated_at} bestLapTime={data.session.bestLapTime} bestLapTimeFormatted={data.session.bestLapTimeFormatted}/>
          </div>
          <div className="overflow-x-auto mb-3 ml-5 col-span-4 bg-base-300 p-4 rounded-box w-5/12">
            <table className="table-zebra table w-full">
              <thead>
              <tr>
                <th>Driver</th>
                <th>Name</th>
                <th>Shortname</th>
                <th>Best lap time</th>
              </tr>
              </thead>
              <tbody >
              {data.drivers.map(x =>
                <DriverInformation created_at={x.created_at} firstName={x.firstName} id={x.id} lastName={x.lastName} playerId={x.playerId} shortName={x.shortName} updated_at={x.updated_at} bestLapTime={x.bestLapTime} bestLapTimeNum={x.bestLapTimeNum}/>
              )}
              </tbody>
            </table>
          </div>
        </div>

      <LapTable session={data.session} cars={data.cars} drivers={data.drivers} />
    </div>
    );
  }

  return(
    <div/>
  );
}
