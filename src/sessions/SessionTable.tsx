import React, {useEffect, useState} from "react";
import useGetRequest from "../api/useGetRequest";
import SessionRow from "./SessionRow";
import DriveSession from "../interfaces/DriveSession";
import {BackendEndpointSessions} from "../api/endpoints";
import Loading from "../Loading";
import HighscoreBoard from "./HighscoreBoard";


export default function SessionTable() {
  const [data, setData] = useState([{} as DriveSession]);
  const [loading, setLoading] = useState(true);
  const {getData} = useGetRequest({path: `${BackendEndpointSessions}`});

  useEffect(() => {
    async function fetchData() {
      await getData().then(function (json){
        setData(json);
        setLoading(false)
      });
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading){
    return (
      <Loading/>
    );
  }

  return(
    <div className={"grid grid-cols-2"}>
      <div className={"col-span-1 h-10 card bg-base-300 rounded-box place-items-center mr-2"}>
        <h2 className={"align-middle m-auto"}>All Sessions</h2>
      </div>
      <div className={"col-span-1 h-10 card bg-base-300 rounded-box place-items-center"}>
        <h2 className={"align-middle m-auto"}>Track Highscoreboard</h2>
      </div>
      <div className="overflow-x-auto mt-2 mr-2">
        <table className="table w-full">
          <thead>
          <tr>
            <th>ID</th>
            <th>Session</th>
            <th>Date</th>
            <th/>
          </tr>
          </thead>
          <tbody >
          {data.map(item =>
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
      <HighscoreBoard/>
    </div>
  );
}
