import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import LineGraph from "./LineGraph";
import "../style/LineGraphContainer.css";

function LineGraphContainer() {
  return (
    <div className="LineGraphContainer">
      <div>
        <div className="LineGraphContainer-head">
          <h3>Task Activities</h3>

          <select style={{ margin: "0px" }}>
            <option value="6 months">6 months</option>
            <option value="1 year">1 Year</option>
          </select>
          <BsThreeDotsVertical style={{ cursor: "pointer" }} size={23} />
        </div>
        <LineGraph />
      </div>
    </div>
  );
}

export default LineGraphContainer;
