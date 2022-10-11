import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";

const Topics = () => {
  const loadData = useLoaderData();
  const data = loadData.data;
  console.log(data);
  return (
    <div>
      <section>
        <div className="grid gap-5 lg:grid-cols-4  bg-slate-600 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data.map((data) => (
            <TopicCard key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Topics;
