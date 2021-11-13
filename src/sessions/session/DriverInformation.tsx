import Driver from "../../interfaces/Driver";
import React from "react";
import SessionBigData from "../../interfaces/SessionBigData";
import CarNameById from "../stats/Cars/CarNameById";

export interface props {
  driver: Driver
  sessionBigData: SessionBigData
  bestLapTime: string
}

export default function DriverInformation({driver, bestLapTime, sessionBigData}: props) {
  let carUsed: number|undefined = sessionBigData.laps.find(x => x.driverId === driver.id)?.carId
  if (carUsed === undefined)
    carUsed = 0
  return (
    <tr className={`${bestLapTime === driver.bestLapTime ? "text-green-500" : ""}`}>
      <td>{driver.firstName}</td>
      <td className={"content-end"}>{driver.lastName}</td>
      <td>{driver.shortName}</td>
      <td>{driver.bestLapTime}</td>
      <td><CarNameById id={carUsed}/></td>
      <td><a href={"/driver/" + driver.id}>
        <button className={"btn"}>Go To Driver</button>
      </a></td>
    </tr>
  );
}
