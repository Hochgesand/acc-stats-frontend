export interface RequestResponse {
  readonly status: string;
  readonly json?: string;
}

interface GetRequestProps {
  readonly path: string;
}

export default function useGetRequest({ path }: GetRequestProps) {
  const rowData = [
    {id: 1, trackname: "monza_2020", sessionIndex: 0, sessionType: "FP1", raceWeekendIndex: 1, metaData: "monza_2020", serverName: "AptInstall Racing 24/7h Monza training"},
  ];

  return {rowData};


  const getData = () => fetch(path, {
    method: "get",
    headers: ""
      ? new Headers({
        "Content-Type": "application/json"
      }) : undefined
  }).then(async (response): Promise<RequestResponse> => {
    return response.ok
      ? { status: `${response.status} ${response.statusText}`, json: await response.json() }
      : { status: `${response.status} ${response.statusText}` }
  });

  return { getData };
}
