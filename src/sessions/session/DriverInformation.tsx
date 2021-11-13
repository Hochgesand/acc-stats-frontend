import Driver from "../../interfaces/Driver";
import React from "react";

export interface props{
  driver: Driver
  bestLapTime: string
}

export default function DriverInformation({driver, bestLapTime}: props) {
  return(
    <tr className={`${bestLapTime === driver.bestLapTime ? "text-green-500" : ""}`}>
      <td>{driver.firstName}</td>
      <td className={"content-end"}>{driver.lastName}</td>
      <td>{driver.shortName}</td>
      <td>{driver.bestLapTime}</td>
      <td><a href={"/driver/" + driver.id}><button className={"btn"}>Go To Driver</button></a></td>
    </tr>
  );
}
