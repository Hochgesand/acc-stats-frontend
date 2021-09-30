import DriveSession from "../interfaces/DriveSession"

export default function SessionRow(driveSession: DriveSession){
  return(
    <tr>
      <td>{driveSession.id}</td>
      <td >{driveSession.trackName}</td>
      <td >{driveSession.created_at}</td>
      <td><a href={"/session/" + driveSession.id}><button className={"btn"}>Go To Session</button></a></td>
    </tr>
  );
}
