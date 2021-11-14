import React from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import UseAPI from "../../../api/UseAPI";
import CarNameById from "../Cars/CarNameById";

export interface propId {
  id: string
}

export default function DriverStats({id}: propId) {
  const useAPI = UseAPI('getTimesOfDriverById', id)
  const playerData = UseAPI('getPlayerById', id)

  if (useAPI.isLoading || playerData.isLoading) {
    return <Loading/>
  }

  if (useAPI.error.length > 0) {
    return (
      <Error msg={useAPI.error}/>
    );
  }

  return (
    <div>
      <div className={"relative h-auto text-base mb-3 col-span-4 bg-base-300 p-4 rounded-box w-full"}>
        <p className={"text-2xl"}>Some maybe useful information about {playerData.data[0].firstName + " \"" + playerData.data[0].shortName + "\" " + playerData.data[0].lastName}:</p>
      </div>
      <div className={"divider"}/>
      <div className={"relative h-auto text-base mb-3 bg-base-300 p-4 rounded-box w-full"}>
        <p className={"text-xl"}>Besttimes per Track</p>
        <div className={"divider"}/>
        <div className={"grid grid-cols-3 gap-4 xl:grid-cols-5 2xl:grid-cols-8"}>
          {useAPI.data.map(x =>
            <div className={"h-auto text-base bg-base-100 p-4 rounded-box w-full"}>
              <p>Track: {x.trackName}</p>
              <p>Time: {x.bestLapTimeFormatted}</p>
              <CarNameById id={x.bestTimeCarId}/>
              <a href={"/session/" + x.bestTimeSessionId}><button className={"btn btn-sm w-full mt-1"}>Go To Session</button></a>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
