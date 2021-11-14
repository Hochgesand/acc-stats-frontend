import React from 'react';
import './App.scss';
import './index.scss'
import MainLanderPage from "./sessions/MainLanderPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Session from "./sessions/session/Session";
import DriverStats from "./sessions/stats/driverStats/DriverStats";
import SessionselectionPage from "./sessions/stats/sessionSelectionPages/SessionselectionPage";
import AllDriver from "./sessions/stats/driverStats/AllDriver";


function App() {
  return (
    <div className={"h-full rounded-md m-4"}>
      <div className={"flex flex-row"}>
        <div className={"h-16 text-white mb-3 bg-base-300 rounded-box w-1/3 mr-4"}>
          <a href={"/"}>
            <div className={"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center"}>
              <span className={"text-2xl"}>Home</span>
            </div>
          </a>
        </div>
        <div className={"h-16 text-white mb-3 bg-base-300 rounded-box w-1/3 mr-4"}>
          <a href={"/sessions"}>
            <div className={"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center"}>
              <span className={"text-2xl"}>Sessions</span>
            </div>
          </a>
        </div>
        <div className={"h-16 text-white mb-3 bg-base-300 rounded-box w-1/3 mr-4"}>
          <a href={"/drivers"}>
            <div className={"h-full w-full hover:bg-base-200 rounded-box flex items-center justify-center"}>
              <span className={"text-2xl"}>Driver</span>
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
            <SessionselectionPage/>
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
