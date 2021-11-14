import React from 'react';
import './App.scss';
import './index.scss'
import MainLanderPage from "./sessions/MainLanderPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Session from "./sessions/session/Session";
import DriverStats from "./sessions/stats/driverStats/DriverStats";
import AllDriver from "./sessions/stats/driverStats/AllDriver";
import HighscoreBoard from "./sessions/stats/sessionSelectionPages/HighscoreBoard";
import AllSessionsTable from "./sessions/stats/sessionSelectionPages/AllSessionsTable";


function App() {
  return (
    <div className={"h-full rounded-md m-4"}>
      <div className={"flex flex-row h-10 md:h-16"}>
        <div className={"mb-3 w-1/4 mr-4"}>
          <a href={"/"}>
              <button className={"btn w-full h-full"}>Home</button>
          </a>
        </div>
        <div className={"mb-3 w-1/4 mr-4"}>
          <a href={"/sessions"}>
            <div className={"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center"}>
              <button className={"btn w-full h-full"}>Sessions</button>
            </div>
          </a>
        </div>
        <div className={"mb-3 w-1/4 mr-4"}>
          <a href={"/highscore"}>
            <button className={"btn w-full h-full"}>Highscores</button>
          </a>
        </div>
        <div className={"mb-3 w-1/4"}>
          <a href={"/drivers"}>
            <div className={"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center"}>
              <button className={"btn w-full h-full"}>Driver</button>
            </div>
          </a>
        </div>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/session/:id" render={(props) => (
            <Session id={props.match.params.id}/>
          )}/>
          <Route exact path="/driver/:id" render={(props) => (
            <DriverStats id={props.match.params.id}/>
          )}/>
          <Route path="/sessions">
            <AllSessionsTable/>
          </Route>
          <Route path="/highscore">
            <HighscoreBoard/>
          </Route>
          <Route path="/drivers">
            <AllDriver/>
          </Route>
          <Route path="/">
            <MainLanderPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
