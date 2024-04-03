import React from "react";

export const Button = (props) => {
  return (
    <div className="my-5">
      <button
        onClick={props.handleClick}
        className="w-full p-4 rounded-md bg-navy-blue text-white uppercase"
      >
        {props.type}
      </button>
    </div>
  );
};
export default Button;
