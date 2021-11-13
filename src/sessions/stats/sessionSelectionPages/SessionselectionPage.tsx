import AllSessionsTable from "./AllSessionsTable";
import HighscoreBoard from "./HighscoreBoard";
import React from "react";

export default function SessionselectionPage() {
  return (
    <div className={"grid grid-cols-2"}>
      <AllSessionsTable/>
      <HighscoreBoard/>
    </div>
  )
}
