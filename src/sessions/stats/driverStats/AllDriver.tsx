import React, {useEffect, useRef, useState} from "react";
import UseAPI from "../../../api/UseAPI";
import Loading from "../../../Loading";
import Driver from "../../../interfaces/Driver";
import debounce from 'lodash.debounce';

export default function AllDriver() {
  const api = UseAPI('getAllDrivers')
  const [searchedDriver, setSearchedDriver] = useState([] as Driver[])
  const searchfield = useRef(null)

  const debouncedSave = (e: string) => {
    const callback = debounce(() => {
      if (e.length === 0) {
        setSearchedDriver(api.data)
        return
      }

      const searchDriver: Driver[] = []
      // eslint-disable-next-line array-callback-return
      api.data.find(x => {
        let name: string = (x.firstName + " " + x.lastName + " " + x.shortName).toLowerCase()
        if (name.includes(e.toLowerCase()))
          searchDriver.push(x)
      })

      setSearchedDriver(searchDriver)
    }, 1000)
    callback()
  }


  useEffect(() => {
    setSearchedDriver(api.data)
  }, [api.isLoading])// eslint-disable-line react-hooks/exhaustive-deps

  if (api.isLoading)
    return (
      <Loading/>
    )

  return (
    <div className={"h-1/12 text-white mb-3 bg-base-300 p-4 rounded-box w-full"}>
      <p className={"text-3xl"}>All driver search</p>
      <input disabled={false} ref={searchfield} onChange={e => debouncedSave(e.target.value)}
             className={"appearance-none w-full bg-base-200 border border-white rounded py-4 px-4 leading-tight focus:outline-none focus:bg-base-400"}/>
      <div className={"divider"}/>
      {searchedDriver.map(x =>
        <div className={"flex flex-row h-8 pl-4 pr-4 text-white bg-base-100 rounded-box w-full mb-1"}>
          <p className={"p-1"}>{x.shortName} {x.firstName} {x.lastName}</p>
          <a href={"/driver/" + x.id}>
            <button className={"btn btn-sm ml-3 right-14 absolute"}>Go To Driver</button>
          </a>
        </div>
      )}
    </div>
  )
}
