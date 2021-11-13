import React, {useEffect, useState} from "react";
import useGetRequest from "../../api/useGetRequest";
import {BackendEndpointSession} from "../../api/endpoints";
import Loading from "../../Loading";
import Error from "../../Error";
import {Lap} from "../../interfaces/Lap";
import SessionBigData from "../../interfaces/SessionBigData";
import LapEntry from "./LapEntry";

export interface props {
  sessionBigData: SessionBigData
  bestLapTime: string
}

export default function LapTable({sessionBigData, bestLapTime}: props){
  const [lapData, setLapData] = useState([] as Lap[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  const path = `${BackendEndpointSession}/${sessionBigData.session?.id}/laps`;
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading){
    return <Loading/>
  }

  if (error.length > 0){
    return(
      <Error msg={error}/>
    );
  }

  return (
    <div className={"overflow-x-auto mt-5 col-span-4 bg-base-300 p-4 rounded-box w-full"}>
      <table className={"table w-full"}>
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
            lap={lap}
            bestLapTime={bestLapTime}
          />)}
        </tbody>
      </table>
    </div>
  );
}
