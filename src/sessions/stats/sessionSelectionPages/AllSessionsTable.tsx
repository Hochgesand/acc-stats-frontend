import React from "react";
import DriveSession from "../../../interfaces/DriveSession";
import Loading from "../../../Loading";
import UseAPI from "../../../api/UseAPI";

export default function AllSessionsTable() {
  const useAPI = UseAPI('getSessions')

  if (useAPI.isLoading){
    return (
      <Loading/>
    );
  }

  return(
    <div>
      <div className={"col-span-1 h-10 card bg-base-300 rounded-box place-items-center mr-2"}>
        <h1 className={"align-middle m-auto"}>All sessions</h1>
      </div>
      <div className="overflow-x-auto mt-2 mr-2">
        <table className="table w-full">
          <thead>
          <tr>
            <th/>
            <th>Session</th>
            <th>Session type</th>
            <th>Date</th>
          </tr>
          </thead>
          <tbody >
          {useAPI.data.map(item =>
            <SessionRow created_at={item.created_at}
                        id={item.id}
                        metaData={item.metaData}
                        raceWeekendIndex={item.raceWeekendIndex}
                        serverName={item.serverName}
                        sessionIndex={item.sessionIndex}
                        sessionType={item.sessionType}
                        trackName={item.trackName}
                        updated_at={item.updated_at}
                        bestLapTimeFormatted={item.bestLapTimeFormatted}
                        bestLapTime={item.bestLapTime}
                        bestDriver={item.bestDriver}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SessionRow(driveSession: DriveSession){
  return(
    <tr>
      <td><a href={"/session/" + driveSession.id}><button className={"btn"}>Go To Session</button></a></td>
      <td>{driveSession.trackName}</td>
      <td>{driveSession.sessionType}</td>
      <td>{driveSession.created_at.substr(0, driveSession.created_at.length - 7)}</td>
    </tr>
  );
}
