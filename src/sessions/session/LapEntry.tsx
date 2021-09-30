import {Lap} from "../../interfaces/sessionData/Lap";
import React from "react";

interface IJaNein {
  num: number
}

export default function LapEntry(lap: Lap){
  return(
    <tr>
      <td>{lap.id}</td>
      <td>{lap.driverName}</td>
      <td>{lap.lapTimeFormatted}</td>
      <td>{lap.split1Formatted}</td>
      <td>{lap.split2Formatted}</td>
      <td>{lap.split3Formatted}</td>
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
