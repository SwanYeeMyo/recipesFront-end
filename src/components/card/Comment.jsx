import React from "react";

const Comment = ({ comment }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 mb-5">
        <div>
          <img
            src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fperson%2F7876166%2F632d4d70c17dc.jpg&w=640&q=75"
            className="rounded-full min-w-24 h-24 object-cover"
            alt=""
          />
        </div>
        <div>
          <div>
            <span className="me-5 font-semibold text-regular">Jenine</span>
            <span className="text-medium opacity-80">June 20,2024</span>
          </div>
          <p className="mt-4 font-light text-body">
            Hello! Does the recipe call for 4 inches of licorice root, or 4
            ounces? It say inces, which could likely be either. Please clarify
            as I would love to give this a go. I am fortunate enough to have a
            lot of licorice growing on my property. Thanks!
          </p>
        </div>
      </div>
    </>
  );
};

export default Comment;
