import React from 'react';
import './App.scss';
import './index.scss'
import useGetRequest from "./api/useGetRequest";
import SessionTable from "./sessions/SessionTable";


function App() {
  const {rowData} = useGetRequest({path: "someIdOderSoKp"});
  return (
    <div className={"lander"}>
      <h2>
        All Sessions
        <SessionTable/>
      </h2>
    </div>
  );
}

export default App;
