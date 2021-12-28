import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const d = [
    {
        name: "Jan",
        ProjectMeating: "90",
    },
    {
        name: "Feb",
        ProjectMeating: "110",
    },
    {
        name: "Mar",
        ProjectMeating: "135",

    },
    {
        name: "Apr",
        ProjectMeating: "101",

    },
    {
        name: "May",
        ProjectMeating: "80",
    },
    {
        name: "Jun",
        ProjectMeating: "113",

    },
]

function LineGraph() {

    return (
        <div>
            <ResponsiveContainer width="96%" aspect={2}>
                <LineChart
                    width={500}
                    height={300}
                    data={d}
                    style={{marginTop:"29px"}}
                    >
                    
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 150]}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="ProjectMeating" stroke="#3954FF" strokeWidth={5} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineGraph
