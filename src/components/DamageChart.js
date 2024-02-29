import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DamageBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number"/>
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="AD" stackId="a" fill="#E88F35" />
        <Bar dataKey="AP" stackId="a" fill="#786CFD" />
        <Bar dataKey="True" stackId="a" fill="#B6D4D7" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DamageBarChart;
