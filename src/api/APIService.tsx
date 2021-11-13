import {BackendEndpointSessions} from "./endpoints";
import DriveSession from "../interfaces/DriveSession";

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
  }
}

export default APIService
