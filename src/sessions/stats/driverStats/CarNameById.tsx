import UseAPI from "../../../api/UseAPI";
import Loading from "../../../Loading";

interface props {
  id: number
}

export default function CarNameById({id}: props) {
  const useAPI = UseAPI('getSpecificCarByCarId', id)

  if (useAPI.isLoading)
    return (
      <Loading/>
    )

  return(
    <>{useAPI.data[0] === undefined ? "error" : useAPI.data[0].carName}</>
  )
}
