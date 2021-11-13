import UseAPI from "../../../api/UseAPI";
import Loading from "../../../Loading";
import React from "react";

interface props {
  id: number
}

export default function CarModelNameById({id}: props) {
  const useAPI = UseAPI('getSpecificCarModelByCarId', id)

  if (useAPI.isLoading)
    return (
      <Loading/>
    )

  return(
    <>{useAPI.data[0] === undefined ? "error" : useAPI.data[0].name}</>
  )
}
