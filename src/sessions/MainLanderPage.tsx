import React from "react";
import GeneralServerStats from "./stats/generalServerStats/GeneralServerStats";


export default function MainLanderPage() {
  return (
    <div>
      <div className={"flex flex-row"}>
        <GeneralServerStats/>
        <div className={"flex flex-col ml-4"}>
          <a href={"/sessions"}><button className={"btn h-auto"}>Show all Sessions and Sessionscoreboard</button></a>
          <a href={"/drivers"} className={"mt-4"}><button className={"btn h-auto"}>Show all Drivers</button></a>
        </div>
      </div>
    </div>
  );
}
