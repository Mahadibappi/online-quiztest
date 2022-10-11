import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { name, logo, total } = data;

  return (
    <div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20">
        <div className="overflow-hidden transition-shadow duration-300 border rounded">
          <a href="/" aria-label="Article">
            <img
              src={logo}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">{name}</p>
              <p className="text-1xl my-3 leading-5">Questions:{total} </p>
            </a>
          </div>
          <Link>
            <button
              type="submit"
              className="d-flex items-center justify-center h-12 ms-6 px-6 font-medium tracking-wide text-green-500 transition duration-200 rounded bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Get Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
