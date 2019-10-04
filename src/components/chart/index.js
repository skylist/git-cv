import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        subject: 'javascript', A: 120, fullMark: 100,
    },
    {
        subject: 'COBOL', A: 86, fullMark: 100,
    },
    {
        subject: 'Python2', A: 99, fullMark: 100,
    },
    {
        subject: 'C', A: 86, fullMark: 100,
    },
    {
        subject: 'Python3', A: 99, fullMark: 100,
    }
];

const Chart = () => {
    return (
        <div style={{ height: 168, width: '100%' }}>
            <ResponsiveContainer>
                <RadarChart data={data} >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" stroke='#fff' />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div >
    );
}

export default Chart