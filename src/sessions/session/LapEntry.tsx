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
    <tr className={`${bestLapTime === lap.lapTimeFormatted ? "text-green-500" : ""}`}>
      <td>{lap.id}</td>
      <td>{lap.driverName}</td>
      <td>{lap.lapTimeFormatted}</td>
      <td className={`${bestSplit1 === lap.split1Formatted ? "text-indigo-400" : ""}`}>{lap.split1Formatted}</td>
      <td className={`${bestSplit2 === lap.split2Formatted ? "text-indigo-400" : ""}`}>{lap.split2Formatted}</td>
      <td className={`${bestSplit3 === lap.split3Formatted ? "text-indigo-400" : ""}`}>{lap.split3Formatted}</td>
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
