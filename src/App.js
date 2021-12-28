import React ,{useState} from 'react'
import 'D:/project web/bugbase project/your-project-name/src/App.css'
import Navbar from './components/Navbar';
import DashboardHead from './components/DashboardHead';
import StatsToday from './components/StatsToday';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TaskActivities from './components/TaskActivities.js';
// import LineGraph from './components/LineGraph.js';
import LineGraphContainer from './components/LineGraphContainer';
import TeamMemberPerform from './components/TeamMemberPerform';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="right-container">
            <DashboardHead />
            <div className="StatsToday-TaskActivities-Container">
              <StatsToday />
              {/* <div className="hello"></div> */}
              <TaskActivities />

            </div>
            <div className='LineGraphContainer-TeamMemberPerformance-Container'>
              <LineGraphContainer/>
              <TeamMemberPerform/>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
