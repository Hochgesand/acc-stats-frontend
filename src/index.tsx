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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/session/:id" render={(props) => (
          <Session id={props.match.params.id}/>
        )} />
        <Route exact path="/driver/:id" render={(props) => (
          <DriverStats id={props.match.params.id}/>
        )} />
        <Route path="/">
          <App/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
