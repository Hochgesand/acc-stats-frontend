import React from 'react';
import './App.scss';
import './index.scss'
import MainLanderPage from "./sessions/MainLanderPage";


function App() {
  return (
    <div className={"lander w-full h-full rounded-md"}>
      <h2>
        <MainLanderPage/>
      </h2>
    </div>
  );
}

export default App;
