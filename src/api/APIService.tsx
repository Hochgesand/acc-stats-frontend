import {BackendEndpointSession, BackendEndpointSessions, baseUrl} from "./endpoints";
import DriveSession from "../interfaces/DriveSession";
import SessionBigData from "../interfaces/SessionBigData";
import {CarModel} from "../interfaces/CarModel";
import Car from "../interfaces/Car";
import {Besttimes} from "../interfaces/Besttimes";

async function getRequest(path: string) {
  return fetch(path, {
    method: "get",
    headers: ""
      ? new Headers({
        "Content-Type": "application/json"
      }) : undefined
  }).then(async (response) => {
    if (!response.ok){
      throw Error("Could not fetch data");
    }
    return response.json()
  })
}

const APIService = {
  getSessions: async() => {
    const response: DriveSession[] = await getRequest(`${BackendEndpointSessions}`)
    return response
  },

  getSession: async(id: number) => {
    const response: SessionBigData[] = [];
    response.push(await getRequest(`${BackendEndpointSession}/${id}`))
    return response
  },

  getTimesOfDriverById: async(id: number) => {
    const response: Besttimes[] = await getRequest(`${baseUrl}/driver/${id}/times`)
    console.log(response)
    return response
  },

  getCarModels: async() => {
    let convertedCarmodels: CarModel[] = []
    const listItems = Object.entries(await getRequest(`${baseUrl}/car/models`))
    // eslint-disable-next-line array-callback-return
    listItems.map(([key, value]: any) => {
      convertedCarmodels.push({id: key, name: value})
    })
    return convertedCarmodels
  },

  getSpecificCarByCarId: async(id: number) => {
    const response: Car[] = [];
    response.push(await getRequest(`${baseUrl}/car/${id}`))
    return response
  }
}

export default APIService
