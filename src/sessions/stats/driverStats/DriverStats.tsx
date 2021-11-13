import React from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import UseAPI from "../../../api/UseAPI";
import CarNameById from "./CarNameById";

export interface propId {
  id: string
}

export default function DriverStats({id}: propId) {
  const useAPI = UseAPI('getTimesOfDriverById', id)

  if (useAPI.isLoading) {
    return <Loading/>
  }

  if (useAPI.error.length > 0) {
    return (
      <Error msg={useAPI.error}/>
    );
  }

  return (
    <>
      <div>
        {useAPI.data.map(x =>
          <div className={"relative h-auto text-white mb-3 col-span-4 bg-base-300 p-4 rounded-box w-4/12"}>
            <p>{x.trackName}</p>
            <p>{x.bestLapTimeFormatted}</p>
            <CarNameById id={x.bestTimeCarId}/>
          </div>
        )}
      </div>
    </>
  )
}
