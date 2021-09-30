import TrackTimes from "../interfaces/TrackTimes";
import React, {useEffect, useState} from "react";
import useGetRequest from "../api/useGetRequest";
import Loading from "../Loading";
import Driver from "../interfaces/sessionData/Driver";

export default function TrackRow(trackTimes: TrackTimes){
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
      <td>{trackTimes.trackName}</td>
      <td >{trackTimes.bestLapTimeFormatted}</td>
      <td >{trackTimes.avgLapTimeFormatted}</td>
      <td >{(data.shortName + ": " + data.firstName + " " + data.lastName)}</td>
  </tr>
);
}
