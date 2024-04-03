import React from "react";
import Navbar from "../layouts/Navbar";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-merri mb-3 font-bold text-navy-blue mt-8">
          404 Not Found !
        </h1>
        <p className="text-lg font-nunito font-bold">
          The page you are looking for does not exist.
        </p>
        <h1 className="text-center text-section text-navy-blue">
          <i class="fa-regular fa-face-sad-cry"></i>
        </h1>
      </div>
    </>
  );
};

export default NotFound;
