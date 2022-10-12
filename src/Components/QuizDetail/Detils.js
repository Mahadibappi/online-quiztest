import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const Details = ({ ques }) => {
  const [ans, setAns] = useState([]);
  const { options, question, correctAnswer, id } = ques;
  const notify = () => toast("Wow so easy!");
  let answer = correctAnswer;
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
        <div className="flex">
          <ul>
            <li className="flex border rounded p-5 text-1xl m-3 ">
              <input type="checkbox" name="checkbox" />{" "}
              <p className="mx-3">{options[0]}</p>
            </li>
            <li className="flex border rounded p-5 text-1xl m-3">
              <input type="checkbox" name="checkbox" />{" "}
              <p className="mx-3">{options[1]}</p>
            </li>
            <li className="flex border rounded p-5 text-1xl m-3">
              <input type="checkbox" name="checkbox" />
              <p className="mx-3">{options[2]}</p>
            </li>
            <li className="flex border rounded p-5 text-1xl m-3">
              <input type="checkbox" name="checkbox" />{" "}
              <p className="mx-3">{options[3]}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
