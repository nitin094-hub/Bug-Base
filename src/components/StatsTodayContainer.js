import React from "react";
import "../style/StatsTodayContainer.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import CircularProgressBar from "./CircularProgressBar";

function StatsToday(props) {
  // console.log(props.Percent)
  return (
    <div className="statsTodaycontainer">
      <div className="container-head">
        <h3>{props.title}</h3>
        <BsThreeDotsVertical style={{ cursor: "pointer" }} size={23} />
      </div>
      <div className="data-container">
        <CircularProgressBar
          rotate="18"
          color={`${props.color}`}
          rotatePercent={`${props.percent}`}
        />
        <div className="data">
          <h2>{props.number}</h2>
          <p>{props.title} Today</p>
        </div>
      </div>
    </div>
  );
}

export default StatsToday;
