import React, {useEffect, useState} from "react";
import useGetRequest from "../../api/useGetRequest";
import {BackendEndpointSession} from "../../api/endpoints";
import Loading from "../../Loading";
import Error from "../../Error";
import {Lap} from "../../interfaces/sessionData/Lap";
import SessionBigData from "../../interfaces/sessionData/SessionBigData";
import LapEntry from "./LapEntry";


export default function LapTable(sessionBigData: SessionBigData){
  const [lapData, setLapData] = useState([] as Lap[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  const path = `${BackendEndpointSession}/${sessionBigData.session?.id}/laps`;
  console.log(path)
  const {getData} = useGetRequest({path: path})

  useEffect(() => {
    async function fetchData() {
      await getData().then(function (json){
        let laps: Lap[] = [];
        laps = json
        laps.forEach(lap =>{
          sessionBigData.drivers?.forEach(driver => {
            if (driver.id === lap.driverId){
              lap.driverName = driver.shortName;
            }
          });
        });

        setLapData(json);
        setLoading(false)
      }).catch( err =>{
          setError(err.message)
          setLoading(false);
        }
      );
    }

    fetchData();
  });



  if (loading){
    return <Loading/>
  }

  if (error.length > 0){
    return(
      <Error msg={error}/>
    );
  }

  return (
    <div className={"overflow-x-auto mt-5 col-span-4 bg-base-300 p-4 rounded-box w-6/12"}>
      <table className={"table"}>
        <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Laptime</th>
          <th>Split 1</th>
          <th>Split 2</th>
          <th>Split 3</th>
          <th>Valid</th>
        </tr>
        </thead>
        <tbody>
        {lapData.map(lap =>
          <LapEntry
            carId={lap.carId}
            created_at={lap.created_at}
            driverId={lap.driverId}
            id={lap.id}
            isValidForBest={lap.isValidForBest}
            lapTime={lap.lapTime}
            lapTimeFormatted={lap.lapTimeFormatted}
            sessionId={lap.sessionId}
            split1={lap.split1}
            split1Formatted={lap.split1Formatted}
            split2={lap.split2}
            split2Formatted={lap.split2Formatted}
            split3={lap.split3}
            split3Formatted={lap.split3Formatted}
            updated_at={lap.updated_at}
            driverName={lap.driverName}
          />)}
        </tbody>
      </table>
    </div>
  );
}
