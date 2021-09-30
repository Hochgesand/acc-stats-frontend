import DriveSession from "../interfaces/DriveSession"

export default function SessionRow(driveSession: DriveSession){
  return(
    <tr>
      <td>{driveSession.id}</td>
      <td className={"content-end"}>{driveSession.trackName}</td>
      <td><a href={"/session/" + driveSession.id}><button className={"btn"}>Go To Session</button></a></td>
    </tr>
  );
}
