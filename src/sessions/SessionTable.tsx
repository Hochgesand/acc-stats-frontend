import React from "react";
import useGetRequest from "../api/useGetRequest";
import SessionRow from "./SessionRow";
import DriveSession from "../interfaces/DriveSession";


export default function SessionTable() {
  const {rowData} = useGetRequest({path: "someIdOderSoKp"});
  let rows: DriveSession[] = [];
  if (rowData != null){
    rowData.forEach(x => rows.push(x))
  }
  return(
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
        <tr>
          <th>ID</th>
          <th>Session</th>
        </tr>
        </thead>
        <tbody >
        {rows.map(item => <SessionRow id={item.id} trackname={item.trackname}/>)}
        </tbody>
      </table>
    </div>
  );
}
