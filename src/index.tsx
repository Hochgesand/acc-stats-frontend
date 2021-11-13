import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Session from "./sessions/session/Session";
import DriverStats from "./sessions/stats/driverStats/DriverStats";
import SessionselectionPage from "./sessions/stats/sessionSelectionPages/SessionselectionPage";
import AllDriver from "./sessions/stats/driverStats/AllDriver";

ReactDOM.render(
  <React.StrictMode>
    <div className={"m-4"}>
      <div className="alert mb-4">
        <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3"
               className="w-6 h-6 mx-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <label>This website is sill under development. Errors may occur and some features could appear to be missing.
            This is indeed in a pre-alpha state. But anyway, visit our Teamspeak @ ts.germandeathsystem.de</label>
        </div>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/session/:id" render={(props) => (
            <Session id={props.match.params.id}/>
          )} />
          <Route exact path="/driver/:id" render={(props) => (
            <DriverStats id={props.match.params.id}/>
          )} />
          <Route path="/sessions">
            <SessionselectionPage/>
          </Route>
          <Route path="/drivers">
            <AllDriver/>
          </Route>
          <Route path="/">
            <App/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
