import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "React",
    question: 9,
  },
  {
    name: "Javasctipt",
    question: 8,
  },
  {
    name: "Css",
    question: 10,
  },
  {
    name: "Git",
    question: 11,
  },
];
const Statistics = () => {
  return (
    <div className="flex justify-center align-middle mt-28">
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
        <YAxis data={data} />
        <Tooltip />
        <Legend />

        <Bar dataKey="question" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Statistics;
