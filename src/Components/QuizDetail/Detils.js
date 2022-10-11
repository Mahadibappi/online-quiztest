import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const Detils = () => {
  return (
    <div>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4 flex align-middle justify-between relative">
          <h3
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
          >
            Quiz of React
          </h3>

          <div>
            <EyeIcon className=" flex justify-end h-6 w-6 text-blue-500 absolute right-0" />
          </div>
        </div>
        <div className="flex ">
          <p>01 .</p>
          <p className="mx-3">questions</p>
        </div>
        <div className="flex">
          <ul>
            <li className="flex border rounded p-5 text-1xl m-3 ">
              <input type="checkbox" name="checkbox" />{" "}
              <p className="mx-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                blanditiis.
              </p>
            </li>
            <li className="flex border rounded p-5 text-1xl m-3">
              <input type="checkbox" name="checkbox" />{" "}
              <p className="mx-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                blanditiis.
              </p>
            </li>
            <li className="flex border rounded p-5 text-1xl m-3">
              <input type="checkbox" name="checkbox" />
              <p className="mx-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                blanditiis.
              </p>
            </li>
            <li className="flex border rounded p-5 text-1xl m-3">
              <input type="checkbox" name="checkbox" />{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                blanditiis.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detils;
