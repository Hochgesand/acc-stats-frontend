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
    <div className={"w-auto m-auto flex items-center justify-center"}>
      <div className={"h-auto text-white mb-3 bg-base-300 p-4 rounded-box w-full"}>
        <div className={"flex items-center justify-center flex-col"}>
          <p className={"text-2xl"}>Some general useless information about our servers:</p>
          <div className={"divider"}/>
          <div className={"w-3/4"}>
            <Doughnut data={piechartConfig} options={{responsive: true, color: "red"}}/>
          </div>
          <p className={"text-2xl mt-2"}>Which accumulate to {useApiStats.data[0].totalLapCount} total laps</p>
          <div className={"divider"}/>
          <p className={"text-2xl"}>Accumulated wasted time on all servers:</p>
          <p className={"text-2xl"}>{useApiStats.data[0].totalTimeWastedFormatted}</p>
          <div className={"divider"}/>
          <p className={"text-2xl"}>Most laps driven in one session:</p>
          <p className={"text-2xl"}>{useApiStats.data[0].mostLapsDrivenInASession} Laps
            <a href={"/session/" + useApiStats.data[0].mostLapsDriveInASessionId}>
              <button className={"ml-2 btn btn-sm"}>Go To Session</button>
            </a></p>
          <div className={"divider"}/>
          <p className={"text-2xl"}>{useApiStats.data[0].totalUniquePlayerCount} unique players have used our servers!</p>
          <div className={"divider"}/>
          <p className={"text-2xl"}>Most popular car and driven laps</p>
          <p>Car: <CarModelNameById id={useApiStats.data[0].carModelIdWithMostLaps}/></p>
          <p>Total laps: {useApiStats.data[0].carModelWithMostLapsLapCount}</p>
        </div>
      </div>
    </div>
  )
}
