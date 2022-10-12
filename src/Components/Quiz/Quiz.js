import React from "react";
import { useLoaderData } from "react-router-dom";
import Detils from "../QuizDetail/Detils";

export const Quiz = () => {
  const quiz = useLoaderData();
  const { name, questions } = quiz.data;

  // console.log(questions);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-sm md:px-24 lg:px-8 lg:py-10 border mt-10">
      <div>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4 flex align-middle justify-between relative">
            <h3
              aria-label="Article"
              className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
            >
              Quiz of {name}
            </h3>
          </div>
          <div>
            {questions.map((ques) => {
              return <Detils key={ques.id} ques={ques} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
