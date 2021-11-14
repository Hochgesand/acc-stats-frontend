import React from "react";
import GeneralServerStats from "./stats/generalServerStats/GeneralServerStats";


export default function MainLanderPage() {
  return (
    <div>
      <div className={"flex flex-col md:flex-row"}>
        <GeneralServerStats/>
      </div>
    </div>
  );
}
