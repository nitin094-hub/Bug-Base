import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const d = [
    {
        name: "Jan",
        Recieved: "140",
        Completed: "70"
    },
    {
        name: "Feb",
        Recieved: "110",
        Completed: "80"
    },
    {
        name: "Mar",
        Recieved: "135",
        Completed: "120"
    },
    {
        name: "Apr",
        Recieved: "115",
        Completed: "100"
    },
    {
        name: "May",
        Recieved: "80",
        Completed: "65"
    },
    {
        name: "Jun",
        Recieved: "113",
        Completed: "100"
    },
]

function BarCharts() {

    return (
        <div>
            <ResponsiveContainer  width="96%" aspect={1.5}>
                <BarChart
                    width={400}
                    height={400}
                    data={d}
                    style={{marginTop:"29px"}}
                >
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 150]}/>
                    <CartesianGrid strokeDasharray="1 1" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Recieved" barSize={10} fill="#3954FF" />
                    <Bar dataKey="Completed" barSize={10} fill="#FFD339" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarCharts
