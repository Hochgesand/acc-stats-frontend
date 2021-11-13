import {Lap} from "../../interfaces/Lap";
import React from "react";
import CarNameById from "../stats/Cars/CarNameById";

interface IJaNein {
  num: number
}

export interface props {
  lap: Lap
  bestLapTime: string
  bestSplit1: string
  bestSplit2: string
  bestSplit3: string
}

export default function LapEntry({lap, bestLapTime, bestSplit2, bestSplit3, bestSplit1}:props){
  return(
    <tr className={`${bestLapTime === lap.lapTimeFormatted ? "bg-blue-800" : ""}`}>
      <td>{lap.id}</td>
      <td>{lap.driverName}</td>
      <td><button className={`${bestLapTime === lap.lapTimeFormatted ? "bg-green-600 btn" : ""}`}>{lap.lapTimeFormatted}</button></td>
      <td><button className={`${bestSplit1 === lap.split1Formatted ? "bg-purple-600 btn" : ""}`}>{lap.split1Formatted}</button></td>
      <td><button className={`${bestSplit2 === lap.split2Formatted ? "bg-purple-600 btn" : ""}`}>{lap.split2Formatted}</button></td>
      <td><button className={`${bestSplit3 === lap.split3Formatted ? "bg-purple-600 btn" : ""}`}>{lap.split3Formatted}</button></td>
      <td><CarNameById id={lap.carId}/></td>
      <JaNein num={lap.isValidForBest}/>
    </tr>
  );
}

function JaNein(num: IJaNein){
  if (num.num === 1){
    return (
      <td>
        Yes
      </td>
    )
  }
  return (
    <td>
      No
    </td>
  );
}
