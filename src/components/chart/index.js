import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';

const Chart = ({data}) => {
    return (
        <div style={{ height: '20vh', width:'100%' }}>
            <ResponsiveContainer>
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" stroke='#fff' />
                    <Radar isAnimationActive={true} dataKey="level" fill="#c586c0" fillOpacity={0.9} />
                </RadarChart>
            </ResponsiveContainer>
        </div >
    );
}

export default Chart