import React from "react";
import HighscoreBoard from "./HighscoreBoard";
import AllSessionsTable from "./AllSessionsTable";
import GeneralServerStats from "./stats/generalServerStats/GeneralServerStats";


export default function MainLanderPage() {
  return(
    <div>
      <div className="alert mb-2">
        <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3"
               className="w-6 h-6 mx-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <label>This website is sill under development. Errors may occur and some features could appear to be missing. This is indeed in a pre-alpha state. But anyway, visit our Teamspeak @ ts.germandeathsystem.de</label>
        </div>
      </div>
      <div className={"grid grid-cols-2"}>
        <AllSessionsTable/>
        <HighscoreBoard/>
      </div>
      <GeneralServerStats/>
    </div>
  );
}
