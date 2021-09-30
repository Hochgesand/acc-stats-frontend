import Driver from "../../interfaces/Driver";

export default function DriverInformation(driver: Driver) {
  return(
    <tr>
      <td>{driver.firstName}</td>
      <td className={"content-end"}>{driver.lastName}</td>
      <td>{driver.shortName}</td>
      <td>{driver.bestLapTime}</td>
    </tr>
  );
}
