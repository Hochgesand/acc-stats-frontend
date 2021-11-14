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
  const [bestsp1, setBestsp1] = useState("")
  const [bestsp2, setBestsp2] = useState("")
  const [bestsp3, setBestsp3] = useState("")
  const path = `${BackendEndpointSession}/${sessionBigData.session?.id}/laps`;
  const {getData} = useGetRequest({path: path})

  useEffect(() => {
    async function fetchData() {
      await getData().then(function (json){
        let laps: Lap[] = [];
        let sp1:string = ""
        let nsp1:number = Number.MAX_VALUE
        let sp2:string = ""
        let nsp2:number = Number.MAX_VALUE
        let sp3:string = ""
        let nsp3:number = Number.MAX_VALUE
        laps = json
        laps.forEach(lap =>{
          sessionBigData.drivers?.forEach(driver => {
            if (driver.id === lap.driverId){
              lap.driverName = driver.shortName + " " + driver.firstName + " " + driver.lastName;
              if (nsp1 > lap.split1){
                nsp1 = lap.split1
                sp1 = lap.split1Formatted
              }
              if (nsp2 > lap.split2){
                nsp2 = lap.split2
                sp2 = lap.split2Formatted
              }
              if (nsp3 > lap.split3){
                nsp3 = lap.split3
                sp3 = lap.split3Formatted
              }
            }
          });
        });

        setLapData(json);
        setBestsp1(sp1)
        setBestsp2(sp2)
        setBestsp3(sp3)
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
    <div className={"mt-5 col-span-4 bg-base-300 p-4 rounded-box w-full"}>
      <table className={"table w-full table-auto"}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Laptime</th>
          <th>Split 1</th>
          <th>Split 2</th>
          <th>Split 3</th>
          <th>Car</th>
          <th>Valid</th>
        </tr>
        </thead>
        <tbody>
        {lapData.map(lap =>
          <LapEntry
            lap={lap}
            bestLapTime={bestLapTime}
            bestSplit1={bestsp1}
            bestSplit2={bestsp2}
            bestSplit3={bestsp3}
          />)}
        </tbody>
      </table>
    </div>
  );
}
