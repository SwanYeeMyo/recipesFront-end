import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  const { id, title, rating, type } = recipe;
  const subType = localStorage.getItem("type");
  return (
    <>
      <div className=" relative  flex flex-col hover:bg-white hover:shadow hover:h-full hover:rounded-md ">
        <div className="overflow-hidden relative ">
          <img
            className="w-full max-h-[177px]  object-cover transition-transform duration-300 transform hover:scale-110"
            src="https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZWYlMjBzdGVha3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image Description"
          />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="mb-2 text-regular font-nunito font-semibold  text-gray-800 dark:text-white">
            {title}
          </h3>
          <div className="flex font-nunito mb-6  justify-between items-center">
            <div>
              <h5 className="text-xs italic">by:Author Dimitri</h5>
            </div>
            <div>
              <h5 className="italic text-xs">
                Rating:
                <span className="text-xs">
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                  <i className="text-yellow-300 fa-solid fa-star"></i>
                </span>
              </h5>
            </div>
          </div>

          <div className="">
            <Link
              to={`/recipes/${id}`}
              className="block  text-center text-sm w-[152px] p-2 bg-navy-blue text-white"
            >
              View
            </Link>
            <button className="absolute top-1 p-2 right-2 rounded-full ">
              {type === "premium" ? (
                <i className=" text-yellow-300 fa-solid fa-lock"></i>
              ) : // Check if subType is 'premium' to determine the lock icon
              subType === "premium" ? (
                <i className="text-yellow-300 fa-solid fa-lock"></i>
              ) : (
                <i className="text-yellow-300 fa-solid fa-lock-open"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
