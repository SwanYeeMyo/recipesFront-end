import React from "react";

const Comment = ({ review }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 mb-4">
        <div>
          <img
            src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fperson%2F7876166%2F632d4d70c17dc.jpg&w=640&q=75"
            className="rounded-full min-w-24 h-24 object-cover"
            alt=""
          />
        </div>
        <div>
          <div>
            <span className="me-5 font-semibold text-regular"></span>
            <span className="text-medium opacity-80">
              {new Date(review.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <p className="mt-4 font-light text-body">{review.comment}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
