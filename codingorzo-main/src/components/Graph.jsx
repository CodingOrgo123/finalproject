import React, { PureComponent } from 'react';
import {
ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
import '../styles/Graph.css'

const data = [
  {
    name: 'January',
    uv: 100,
    pv: 50,
    amt: 100,
    cnt: 80,
  },
  {
    name: 'Febuary',
    uv: 80,
    pv: 50,
    amt:100,
    cnt:30,
  },
  {
    name: 'March',
    uv: 100,
    pv: 87,
    amt: 45,
    cnt: 35,
  },
  {
    name: 'April',
    uv: 65,
    pv: 80,
    amt: 78,
    cnt: 48,
  },
  {
    name: 'May',
    uv: 52,
    pv: 78,
    amt: 87,
    cnt: 95,
  },
  {
    name: 'June',
    uv: 50,
    pv: 68,
    amt: 71,
    cnt: 38,
  },
  {
    name: 'July',
    uv: 50,
    pv: 68,
    amt: 71,
    cnt: 38,
  },
  {
    name: 'August',
    uv: 50,
    pv: 68,
    amt: 71,
    cnt: 38,
  },
  {
    name: 'September',
    uv: 50,
    pv: 68,
    amt: 71,
    cnt: 38,
  },
  
];

const ChartComponent = () => {
    return (
        
      <ResponsiveContainer width="95%" height="15%">
        <br></br>
        <br></br>
        <br></br>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
        <h3 id="useractivity">User Activity(During Last Few Months)</h3>
      </ResponsiveContainer>
      
    );
  }
export default ChartComponent;
