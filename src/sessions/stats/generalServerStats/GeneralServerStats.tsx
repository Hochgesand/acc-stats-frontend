import Loading from "../../../Loading";
import Error from "../../../Error";
import React from "react";
import {Doughnut} from 'react-chartjs-2';
import UseAPI from "../../../api/UseAPI";
import CarModelNameById from "../Cars/CarModelNameById";

export default function GeneralServerStats() {
  const useApiStats = UseAPI('getGenericServerStats')

  let piechartConfig = {
    labels: [
      'invalid laps',
      'valid laps',
    ],
    datasets: [{
      label: 'LapsData',
      data: [0, 0],
      backgroundColor: [
        'rgb(255,0,0)',
        'rgb(48,255,0)',
      ],
      hoverOffset: 0
    }],
  };

  if (!useApiStats.isLoading) {
    piechartConfig = {
      labels: [
        'invalid laps',
        'valid laps',
      ],
      datasets: [{
        label: 'LapsData',
        data: [useApiStats.data[0].totalInvalidLaps, useApiStats.data[0].totalValidLaps],
        backgroundColor: [
          'rgb(255,0,0)',
          'rgb(48,255,0)',
        ],
        hoverOffset: 0
      }],
    };
  }

  if (useApiStats.isLoading) {
    return <Loading/>
  }

  if (useApiStats.error.length > 0) {
    return (
      <Error msg={useApiStats.error}/>
    );
  }

  return (
    <div className={"w-100 grid grid-rows-1 gap-4 "}>
      <div className={"h-auto text-white mb-3 bg-base-300 p-4 rounded-box w-full"}>
        <p className={"text-2xl"}>Some general useless information about our servers</p>
        <div className={"divider"}/>
        <Doughnut data={piechartConfig} options={{responsive: true, color: "red"}}/>
        <p className={"mt-4 text-2xl"}>Accumulated wasted time on all servers</p>
        <p>{useApiStats.data[0].totalTimeWastedFormatted}</p>
        <div className={"divider"}/>
        <p className={"mt-4 text-2xl"}>Session with most laps driven</p>
        <p>{useApiStats.data[0].mostLapsDrivenInASession}
        <a href={"/session/" + useApiStats.data[0].mostLapsDriveInASessionId}>
          <button className={"ml-2 btn btn-sm"}>Go To Session</button>
        </a></p>
        <div className={"divider"}/>
        <p className={"mt-4 text-2xl"}>Unique player counter</p>
        <p>{useApiStats.data[0].totalUniquePlayerCount}</p>
        <div className={"divider"}/>
        <p className={"mt-4 text-2xl"}>Most popular car and driven laps</p>
        <p><CarModelNameById id={useApiStats.data[0].carModelIdWithMostLaps}/></p>
        <p>Total laps: {useApiStats.data[0].carModelWithMostLapsLapCount}</p>
      </div>
    </div>
  )
}
