import {useState} from "react";

export interface RequestResponse {
  readonly status: string;
  readonly json?: string;
}

interface GetRequestProps {
  readonly path: string;
}

export default function useGetRequest({ path }: GetRequestProps) {
  const getData = () => fetch(path, {
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
  });

  return { getData  };
}
