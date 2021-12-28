import React from 'react'
import 'D:/project web/bugbase project/your-project-name/src/style/TaskActivities.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import BarCharts from './BarCharts.js';


function BarChartData() {
    return (
        <div className='TaskActivitiesContainer'>
            <div >

                <div className='TaskActivitiesContainer-head'>
                    <h3>Task Activities</h3>

                    <select style={{ margin: "0px" }}>
                        <option value="6 months">6 months</option>
                        <option value="1 year">1 Year</option>
                    </select>
                    <BsThreeDotsVertical style={{ cursor: "pointer" }} size={23} />
                </div>
                <BarCharts />
            </div>

        </div>
    )
}

export default BarChartData
