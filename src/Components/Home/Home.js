import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Card from "../HomeCard/Card";

const Home = () => {
  const loadData = useLoaderData();
  const data = loadData.data;

  return (
    <div>
      <Header />
      <section>
        <div className="grid gap-5 lg:grid-cols-4  bg-slate-600 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
