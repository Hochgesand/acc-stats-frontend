import React, {useEffect, useState} from "react";
import useGetRequest from "../api/useGetRequest";
import Loading from "../Loading";
import TrackTimes from "../interfaces/TrackTimes";
import Driver from "../interfaces/Driver";

export default function HighscoreBoard(){
  const [data, setData] = useState([] as TrackTimes[]);
  const [loading, setLoading] = useState(true);
  const {getData} = useGetRequest({path: "https://acc-api.aptinstall.de/tracks/times"});

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
      <div className={"col-span-1 h-10 card bg-base-300 rounded-box place-items-center"}>
        <h1 className={"align-middle m-auto"}>Track scoreboard</h1>
      </div>
      <div className="overflow-x-auto mt-2">
        <table className="table w-full">
          <thead>
          <tr>
            <th/>
            <th>Track</th>
            <th>Best laptime</th>
            <th>player</th>
          </tr>
          </thead>
          <tbody >
          {data.map(item =>
            <TrackRow
              avgLapTime={item.avgLapTime}
              avgLapTimeFormatted={item.avgLapTimeFormatted}
              bestLapTime={item.bestLapTime}
              bestLapTimeFormatted={item.bestLapTimeFormatted}
              bestTimedriverId={item.bestTimedriverId}
              trackName={item.trackName}
              bestTimeSessionId={item.bestTimeSessionId}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TrackRow(trackTimes: TrackTimes){
  const [data, setData] = useState({} as Driver);
  const [loading, setLoading] = useState(true);
  const {getData} = useGetRequest({path: `https://acc-api.aptinstall.de/driver/${trackTimes.bestTimedriverId}`});

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
      <td>
        <Loading/>
      </td>
    );
  }

  return(
    <tr>
      <td><a href={"/session/" + trackTimes.bestTimeSessionId}><button className={"btn"}>Go To Session</button></a></td>
      <td>{trackTimes.trackName}</td>
      <td >{trackTimes.bestLapTimeFormatted}</td>
      <td >{(data.shortName + " - " + data.firstName + " " + data.lastName)}</td>
    </tr>
  );
}
