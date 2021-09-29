import DriveSession from "../interfaces/DriveSession";

export default function SessionRow({ id, trackname}: DriveSession){
  return(
    <tr>
      <td>{id}</td>
      <td>{trackname}</td>
    </tr>
  );
}
