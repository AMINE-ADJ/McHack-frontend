import React, { useState } from "react";
import BgPic from "../assets/LoginShape.svg";
import BgChar from "../assets/LoginChar.svg";
import person from "../assets/person.svg";
import password from "../assets/Password.svg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage() {
  // const [userName, setUsername] = useState("");
  // const [pass, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleUserNameChange = (event) => {
  //   setUsername(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };
  // const Login = (data) => {
  //   console.log(data);
  //   axios
  //     .post("microhack-backend-production.up.railway.app/lab/auth", {
  //       username: data.username,
  //       password: data.password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/acceuil/dashboard/booking");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="relative w-screen h-screen flex gap-64">
      <div className="select-none relative ">
        <img className="  h-[94%] w-fit " src={BgPic} alt="bg" />
        <img
          className=" top-24 left-10 absolute w-[650px]  "
          src={BgChar}
          alt="bg-char"
        />
      </div>

      <div className="flex flex-col ">
        <div className="m-auto w-full max-w-md flex flex-col gap-20">
          <div className="text-5xl ml-[115px] font-bold mb-6 font-OpenSans ">
            Login
          </div>
          <form>
            <div className="mb-4">
              {/* <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label> */}
              <div className="relative w-96">
                <img src={person} className="absolute w-10 mt-3 mr-1 pl-3 " />
                <input
                  className="pl-16 pr-4 shadow appearance-none border rounded w-full py-3 px-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  required
                  // onChange={handleUserNameChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="relative w-96">
                <img src={password} className="absolute w-10 mt-3 mr-1 pl-3 " />
                <input
                  className="pl-16 pr-4 shadow appearance-none border rounded w-full py-3 px-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  // onChange={handlePasswordChange}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="font-OpenSans font-medium text-mc-red text-sm mb-10 ">
                Forget the password ?
              </button>
            </div>
            <div className="flex justify-center">
              <Link
                to={"/acceuil/dashboard/booking"}
                className="bg-mc-red hover:bg-red-700 text-white font-bold py-2 px-4 w-80  rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
                name="submit"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
