import React from "react";
import { Link } from "react-router-dom";

export default function DashboardBar() {
  return (
    <div className="ml-52 bg-mc-creme h-32 flex flex-col gap-5 justify-start items-start">
      <ul className="flex flex-row gap-20 text-xl font-bold items-center pt-10 justify-start pl-20">
        <li>
          <Link className="text-mc-black1 text hover:text-mc-green focus:text-mc-green focus:underline decoration-solid " to={"/acceuil/dashboard/booking"}>Booking</Link>
        </li>
        <li>
          <Link className="text-mc-black1 hover:text-mc-green focus:text-mc-green focus:underline decoration-solid" to={"/acceuil/dashboard/progress"}>In progress</Link>
        </li>
        <li>
          <Link className="text-mc-black1 hover:text-mc-green focus:text-mc-green focus:underline decoration-solid" to={"/acceuil/dashboard/finish"}>Finish</Link>
        </li>
      </ul>

      <p className="ml-20 text-mc-blue2 font-bold ">Today's report</p>
    </div>
  );
}
