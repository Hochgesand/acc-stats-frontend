import React from "react";
import GeneralServerStats from "./stats/generalServerStats/GeneralServerStats";


export default function MainLanderPage() {
  return (
    <div>
      <div className={"flex flex-col md:flex-row"}>
        <GeneralServerStats/>
      </div>
      <div className={"right-0 bottom-0 absolute m-4 rounded-box bg-base-300 p-2"}>
        Made with ❤ by:
        <a href={"https://github.com/Hochgesand"}><button className={"ml-2 mr-2 btn"}>André Schmitz</button></a>and
        <a href={"https://github.com/flopana"}><button className={"btn ml-2"}>Florian Erbs</button></a>
      </div>
    </div>
  );
}
