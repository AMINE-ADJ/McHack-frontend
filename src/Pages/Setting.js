import React, { useState } from "react";
import rightarrow from "../assets/rightarrow.svg";
import Test from "../Components/Test";
export default function Setting() {

  // const [Tests,setTests] = useState([]);
  let Tests =[
    {testName :"Complete blood count (CBC)", testPrice:"1500DA"},
    {testName :"Blood glucose test", testPrice:"2500DA"},
    {testName :"Lipid pane", testPrice:"2000DA"},
    {testName :"Liver function tests", testPrice:"2500DA"},
    {testName :"Kidney function tests", testPrice:"2500DA"},
    {testName :"Thyroid function tests", testPrice:"2500DA"},
    {testName :"Blood clotting tests", testPrice:"2500DA"},
];
  return (
    <div className="h-screen w-full bg-mc-creme pl-56 pt-10 flex flex-col gap-3 ">
      <div className="flex flex-row items-end justify-between"> 
        <div className="flex flex-row items-end gap-5">
          <div>
            <img className="w-3 h-6 mt-2" src={rightarrow} alt="rightarrow" />
          </div>
          <p className="text-xl font-bold font-OpenSans ">Tests</p>
        </div>
        <button
          className="bg-mc-red mr-10 text-white font-OpenSans md:my-0 my-2 md:py-2  rounded-lg  md:px-32 px-2 hover:bg-red-400  hover:text-black
    duration-200"
        >
          Add a test
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-10">
      {Tests.map((test,index) => (
            <Test id={index} testName={test.testName} testPrice={test.testPrice}/>
          ))}
      </div>
    </div>
  );
}
