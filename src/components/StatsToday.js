import React from "react";
import StatsTodayContainer from "./StatsTodayContainer";
import "../style/StatsToday.css";

function Data() {
  return (
    <div id="StatsTodayContainer">
      <StatsTodayContainer
        title="Works"
        number="50"
        percent="50"
        color="#FFD339"
      />
      <StatsTodayContainer
        title="Analytics"
        number="310"
        percent="25"
        color="#FF6D39"
      />
      <StatsTodayContainer
        title="Statistics"
        number="75"
        percent="59"
        color="#9539FF"
      />
      <StatsTodayContainer
        title="Task"
        number="15"
        percent="75"
        color="#3954FF"
      />
    </div>
  );
}

export default Data;
