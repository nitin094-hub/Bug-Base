import React, { useState, useEffect } from 'react'
import axios from "axios";
import TeamMemberData from './TeamMemberData'
import 'D:/project web/bugbase project/your-project-name/src/style/TeamMemberPerform.css'
import image0 from 'D:/project web/bugbase project/your-project-name/src/image0.jpg';

const api='http://localhost:5000/teams';

export default function TeamMemberPerform() {
  
  const [teams,setTeams]=useState([]);

  const retrieveTeams=async()=>{
    const response=await axios.get(api)
    return response.data;
  }

  useEffect(()=>{
    const getAllTeams=async()=>{
      const allTeams=await retrieveTeams();
      if(allTeams) setTeams(allTeams);
    }
    getAllTeams();
  },[]);

  console.log(teams);

  return (
    <div className='TeamMemberPerform'>
      <div >

        <div className='TeamMemberPerform-head'>
          <h3>Team Member Performance </h3>
        </div>
        {
          teams.map(val=>{
            return (
              <>
              <TeamMemberData name={val.name} designation={val.designation} performance={val.performance} image={image0}/>
              <hr />
              </>
            
            )
          })
        }

      </div>
    </div>
  )
}
