import DriveSession from "../../interfaces/DriveSession";

export default function SessionInformation(driveSession: DriveSession) {
  return (
    <div>
      <div className="h-10 w-11/12 card bg-base-200 rounded-box place-items-center w-auto m-2 p-2">
        <h2>Sessioninformation</h2>
      </div>
      <div className="h-10 w-11/12 card bg-base-200 rounded-box place-items-center m-2 p-2">
        {driveSession.id}
      </div>
      <div className="h-10 card w-11/12 bg-base-200 rounded-box place-items-center m-2 p-2">
        {driveSession.trackName}
      </div>
      <div className="h-auto card w-11/12 bg-base-200 rounded-box place-items-center m-2 p-2">
        {driveSession.serverName}
      </div>
      <div className="h-auto card w-11/12 bg-base-200 rounded-box place-items-center m-2 p-2">
        Best Laptime overall: {driveSession.bestLapTimeFormatted}
      </div>
    </div>
  );
}
