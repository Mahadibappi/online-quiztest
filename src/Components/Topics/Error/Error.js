import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <h1 className="text-4xl">Sorry! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className="text-red-500 text-4xl">
              {error.statusText || error.message}
            </p>
            <p className="text-4xl">{error.status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Error;
