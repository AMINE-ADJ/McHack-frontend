import React from 'react'

 export default function NavBar() {
  return (
    <div className='w-full bg-white h-16'>
        {/* <div>
          <input
            className="bg-transparent focus:outline-none w-[100%] h-9 ml-14 text-white font-Hack-bold"
            placeholder=""
          />
        </div> */}
       <div className="relative w-[500px] ml-72 pt-2 ">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute h-7 w-7 ml-3 mt-2 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
                <input
                  className="pl-16 pr-4 shadow appearance-none border rounded-xl w-full py-3 px-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Searchtext"
                  type="text"
                  placeholder="Search"
                  required
                />
              </div>

      
    </div>
  );
}
