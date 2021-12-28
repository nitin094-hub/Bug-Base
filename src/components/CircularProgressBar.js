import React from 'react'
import 'D:/project web/bugbase project/your-project-name/src/style/CircularProgressBar.css'

function CircularProgressBar(props) {
    const degRotationCalc=((parseInt(props.rotatePercent)*360)/100)/2
    return (
        <div className="circle-wrap">
            <div className="circle">

                <div className="mask full" style={{transform:`rotate(${degRotationCalc}deg)`}}>
                    <div className="fill" style={{transform:`rotate(${degRotationCalc}deg)`,backgroundColor:`${props.color}`}}></div>
                </div>
                <div className="mask half">
                    <div className="fill" style={{transform:`rotate(${degRotationCalc}deg)`,backgroundColor:`${props.color}`}}></div>
                </div>
                <div className="inside-circle" style={{color:`${props.color}`}}> {props.rotatePercent}% </div>

            </div>
        </div>
    )
}

export default CircularProgressBar
