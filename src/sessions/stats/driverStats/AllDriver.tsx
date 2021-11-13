import React from "react";
import UseAPI from "../../../api/UseAPI";
import Loading from "../../../Loading";

export default function AllDriver() {
  const api = UseAPI('getAllDrivers')

  if (api.isLoading)
    return (
      <Loading/>
    )

  return (
    <div className={"h-1/12 text-white mb-3 bg-base-300 p-4 rounded-box w-full"}>
      <p className={"text-3xl"}>All Drivers (to search someone use "STRG + F")</p>
      <div className={"divider"}/>
      {api.data.map(x =>
        <div className={"flex flex-row h-8 pl-4 pr-4 text-white bg-base-100 rounded-box w-full mb-1"}>
          <p className={"p-1"}>{x.shortName} {x.firstName} {x.lastName}</p>
          <a href={"/driver/" + x.id}><button className={"btn btn-sm ml-3 right-14 absolute"}>Go To Driver</button></a>
        </div>
      )}
    </div>
  )
}
