import React from "react";

export default function Test(props) {
  return (
    <div className="flex flex-row">
      <div
        className="bg-white w-[70%] mr-10 text-black font-OpenSans md:my-0 my-2 md:py-2 rounded-lg md:px-32 px-2 
    duration-200"
      >
       {props.id+1}.{props.testName} <span className="text-mc-red">{props.price}</span>
      </div>
      <button
        className="bg-mc-green mr-10  text-white font-OpenSans md:my-0 my-2 md:py-2  rounded-lg  md:px-16 px-2 hover:bg-red-400  hover:text-black
    duration-200"
      >
        Edit
      </button>
      <button
        className="bg-mc-green mr-10 text-white font-OpenSans md:my-0 my-2 md:py-2  rounded-lg  md:px-24 px-2 hover:bg-red-400  hover:text-black
    duration-200"
      >
        DELETE
      </button>
    </div>
  );
}
