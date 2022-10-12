import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const Details = ({ ques }) => {
  const [ans, setAns] = useState([]);
  const { options, question, correctAnswer, id } = ques;
  let answer = correctAnswer;
  const [tost, setTost] = useState([]);
  // toast
  const correct = () =>
    toast.success("Correct Congratulations!", {
      position: toast.POSITION.TOP_CENTER,
    });
  const wrong = () =>
    toast.error("Ops wrong try again!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const handleAnswer = (e) => {
    const value = e.target.value;
    if (value === answer) {
      setTost(correct);
    } else {
      setTost(wrong);
    }
  };

  const handleView = () => {
    setAns(answer);
  };

  return (
    <div>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4 flex align-middle justify-between relative">
          <div>
            <EyeIcon
              onClick={handleView}
              className=" flex justify-end h-6 w-6 text-blue-500 absolute right-0"
            />
            <h2 className="text-green-400 text-2xl ">{ans}</h2>
          </div>
        </div>
      </div>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="flex ">
          <p className="mx-3 px-5">Q. {question}</p>
        </div>
        <div className="">
          <ul>
            <li className=" grid grid-flow-row  border rounded p-10 text-1xl m-5 gap-4">
              {options.map((option) => (
                <div>
                  <button>
                    <input
                      className="mr-2"
                      onClick={handleAnswer}
                      type="radio"
                      name="radio"
                      key={id}
                      value={option}
                    />
                    {option}
                  </button>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
