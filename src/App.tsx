import React from 'react';
import './App.scss';
import './index.scss'
import useGetRequest from "./api/useGetRequest";
import SessionTable from "./sessions/SessionTable";


function App() {
  const {getData} = useGetRequest({path: "someIdOderSoKp"});
  return (
    <div className={"lander w-full h-full rounded-md px-4 py-4"}>
      <h2>
        <SessionTable/>
      </h2>
    </div>
  );
}

export default App;
