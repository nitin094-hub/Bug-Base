import React from 'react'
import 'D:/project web/bugbase project/your-project-name/src/style/TeamMemberData.css'

function TeamMemeberData(props) {
    return (
        <div className='TeamMemberDataContainer'>
            <div className="image">
                <img src={props.image} alt="" />
                <div className='MemberData'>

                    <h3>{props.name}</h3>
                    <p style={{color:"grey",fontSize:"13px"}}>{props.designation}</p>
                </div>
            </div>
            <div style={{marginTop:"10px",flexBasis:"39px"}}>
                <button className='btn'>{props.performance}</button>
            </div>
        </div>
    )
}

export default TeamMemeberData
