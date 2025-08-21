import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Select } from "antd";
const data = [
  {
    name: "Jan",
    Requested: 4000,
    Completed: 2400,
    value: 2400,
  },
  {
    name: "Fab",
    Requested: 3000,
    Completed: 1398,
    value: 2210,
  },
  {
    name: "Mar",
    Requested: 2000,
    Completed: 9800,
    value: 2290,
  },
  {
    name: "Apr",
    Requested: 2780,
    Completed: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Requested: 1890,
    Completed: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    Requested: 2390,
    Completed: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    Requested: 3490,
    Completed: 4300,
    amt: 2100,
  },
];

function CompletionRate() {
  const [year, setYear] = useState("2025");
  const handleSelectChange = (value) => {
    setYear(value);
  };
  return (
    <div className="w-full h-[350px]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-[var(--font-color)] font-bold mb-4">
          Completion Rate
        </h1>
        <Select
          defaultValue={year}
          style={{ width: 120 }}
          onChange={handleSelectChange}
        >
          <Select.Option value="2025">2025</Select.Option>
          <Select.Option value="2024">2024</Select.Option>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Requested" fill="#F57C00" />
          <Bar dataKey="Completed" fill="#EEC588" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CompletionRate;
