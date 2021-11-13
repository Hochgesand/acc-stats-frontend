import Driver from "../../interfaces/Driver";
import React from "react";

export default function DriverInformation(driver: Driver) {
  return(
    <tr>
      <td>{driver.firstName}</td>
      <td className={"content-end"}>{driver.lastName}</td>
      <td>{driver.shortName}</td>
      <td>{driver.bestLapTime}</td>
      <td><a href={"/driver/" + driver.id}><button className={"btn"}>Go To Driver</button></a></td>
    </tr>
  );
}
