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
    <div>
      <div className="alert mb-2">
        <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3"
               className="w-6 h-6 mx-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <label>This website is sill under development. Errors may occur and some features could appear to be missing. This is indeed in a pre-alpha state.</label>
        </div>
      </div>

      <div className={"grid grid-cols-2"}>
        <div className={"col-span-1 h-10 card bg-base-300 rounded-box place-items-center mr-2"}>
          <h1 className={"align-middle m-auto"}>All sessions</h1>
        </div>
        <div className={"col-span-1 h-10 card bg-base-300 rounded-box place-items-center"}>
          <h1 className={"align-middle m-auto"}>Track scoreboard</h1>
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
    </div>
  );
}
