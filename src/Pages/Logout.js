import React from "react";
import leftarrow from "../assets/leftarrow.svg"
import Exit from "../assets/ColoredExitsvg.svg" 
export default function Logout() {
  return (
    <div className="h-screen w-full bg-mc-creme pl-56 pt-10">
      <div className="flex flex-row items-end gap-5 mb-24">
        <div>
          <img className="w-3 h-6 mt-2" src={leftarrow} alt="rightarrow" />
        </div>
        <p className="text-xl font-bold font-OpenSans ">Logout</p>
      </div>
      <div className=" ml-96 flex flex-col gap-16">
      <div className="flex flex-row gap-5">
        <div>
          <img src={Exit} className="w-10 h-10"/>
        </div>
      <p className="text-3xl text-mc-green font-bold ">DO YOU WANT TO EXIT! </p>
      </div>
      <div className="flex flex-row gap-32 text-white ml-9 ">
      <button className=" px-10 py-5 bg-mc-red rounded-xl ">
      YES 
      </button>
      <button className=" px-10 py-5 bg-mc-red rounded-xl ">
      NO 
      </button>
      </div>
      </div>
    </div>
  );
}
