import React, {useEffect, useState} from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import useGetRequest from "../../../api/useGetRequest";
import {baseUrl} from "../../../api/endpoints";
import {Besttimes} from "../../../interfaces/Besttimes";
import {CarModel} from "../../../interfaces/CarModel";

export interface propId {
  id: string
}

export default function DriverStats({id}: propId){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  const [times, setTimes] = useState([] as Besttimes[])
  const [carmodels, setCarmodels] = useState([] as CarModel[])
  const getCarmodels = useGetRequest({path: `${baseUrl}/car/models`});
  const driverTimes = useGetRequest({path: `${baseUrl}/driver/${id}/times`});

  useEffect(() => {
    async function getDriverData() {
      await driverTimes.getData().then(function (json){
        setTimes(json)
        setLoading(false)
      }).catch( err =>{
          setError(error + err.message)
          setLoading(false);
        }
      );
    }

    async function fetchCarModels() {
      await getCarmodels.getData().then(function (json){
        let convertedCarmodels: CarModel[] = []
        const listItems = Object.entries(json)
        // eslint-disable-next-line array-callback-return
        listItems.map(([key, value]: any) => {
          convertedCarmodels.push({id: key, name: value})
        })

        setCarmodels(convertedCarmodels)
        setLoading(false)
      }).catch( err =>{
          setError(err.message)
          setLoading(false);
        }
      );
    }

    fetchCarModels()
    getDriverData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading){
    return <Loading/>
  }

  if (error.length > 0){
    return(
      <Error msg={error}/>
    );
  }

  return (
    <>
      <div className={"relative h-auto text-white mb-3 col-span-4 bg-base-300 p-4 rounded-box w-4/12"}>
        {times.map(x =>
          <div className={""}>
            <p>{x.trackName}</p>
            <p>{x.bestLapTimeFormatted}</p>
            <p>{carmodels.find(y => y.id = x.bestTimeLapId)?.name}</p>
          </div>
        )}
      </div>
    </>
  )
}
