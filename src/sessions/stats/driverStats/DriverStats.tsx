import React, {useEffect, useState} from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import useGetRequest from "../../../api/useGetRequest";
import {baseUrl} from "../../../api/endpoints";
import Driver from "../../../interfaces/Driver";
import {Besttimes} from "../../../interfaces/Besttimes";

export interface propId {
  id: string
}

export default function DriverStats({id}: propId){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [driver, setDriver] = useState({} as Driver)
  const [times, setTimes] = useState([] as Besttimes[])
  const driverRequest = useGetRequest({path: `${baseUrl}/driver/${id}`});
  const driverTimes = useGetRequest({path: `${baseUrl}/driver/${id}/times`});

  useEffect(() => {
    async function getDriverInfo() {
      await driverRequest.getData().then(function (json){
        setDriver(json)
        setLoading(false)
      }).catch( err =>{
          setError(error + err.message)
          setLoading(false);
        }
      );
    }
    async function getDriverData() {
      await driverTimes.getData().then(function (json){
        setTimes(json)
        setLoading(false)
      }).catch( err =>{
          setError(error + err.message)
          setLoading(false);
        }
      );
    }
    getDriverData();
    getDriverInfo();
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
    <>
      <div className={"relative h-auto text-white mb-3 col-span-4 bg-base-300 p-4 rounded-box w-4/12"}>
        {times.map(x =>
          <div className={""}>
            <p>{x.trackName}</p>
            <p>{x.bestLapTimeFormatted}</p>
          </div>
        )}
      </div>
    </>
  )
}
