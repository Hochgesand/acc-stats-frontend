import Loading from "../../../Loading";
import Error from "../../../Error";
import React, {useEffect, useState} from "react";
import {Doughnut} from 'react-chartjs-2';
import useGetRequest from "../../../api/useGetRequest";
import {baseUrl} from "../../../api/endpoints";
import {OverallStats} from "../../../interfaces/OverallStats";
import Driver from "../../../interfaces/Driver";

export default function GeneralServerStats() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  const [stats, setStats] = useState({} as OverallStats)
  const [drivers, setDrivers] = useState([] as Driver[])
  const statRequest = useGetRequest({path: `${baseUrl}/stats`});
  const driverRequest = useGetRequest({path: `${baseUrl}/drivers`});
  const piechartConfig = {
    labels: [
      'invalid laps',
      'valid laps',
    ],
    datasets: [{
      label: 'LapsData',
      data: [stats.totalInvalidLaps, stats.totalValidLaps],
      backgroundColor: [
        'rgb(255,0,0)',
        'rgb(48,255,0)',
      ],
      hoverOffset: 0
    }],
  };

  useEffect(() => {
    async function fetchDataStats() {
      await statRequest.getData().then(function (json){
        setStats(json)
        setLoading(false)
      }).catch( err =>{
          setError(err.message)
          setLoading(false);
        }
      );
    }
    async function fetchDataDrivers() {
      await driverRequest.getData().then(function (json){
        setDrivers(json)
        setLoading(false)
      }).catch( err =>{
          setError(err.message)
          setLoading(false);
        }
      );
    }
    fetchDataDrivers();
    fetchDataStats();
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
    <div className={"w-100 grid grid-rows-1 grid-cols-2 gap-4"}>
      <div className={"h-auto text-white mb-3 bg-base-300 p-4 rounded-box w-full"}>
        <Doughnut data={piechartConfig} options={{responsive: true, color: "red"}}/>

      </div>
      <div className={"h-1/12 text-white mb-3 bg-base-300 p-4 rounded-box w-full"}>
        <p className={"text-3xl"}>All Drivers</p>
        {drivers.map(x =>
          <div className={"flex flex-row"}>
            <p>{x.shortName} {x.firstName} {x.lastName}</p>
            <a href={"/driver/" + x.id}><button className={"btn"}>Go To Driver</button></a>
          </div>
        )}
      </div>
    </div>

  )
}
