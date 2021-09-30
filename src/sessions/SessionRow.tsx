import DriveSession from "../interfaces/DriveSession"

export default function SessionRow(driveSession: DriveSession){
  return(
    <tr>
      <td><a href={"/session/" + driveSession.id}><button className={"btn"}>Go To Session</button></a></td>
      <td >{driveSession.trackName}</td>
      <td >{driveSession.sessionType}</td>
      <td >{driveSession.created_at}</td>
    </tr>
  );
}
