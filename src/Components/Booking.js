import React, { useState } from "react";
import GeneralTable from "./GeneralTable";
import ReactPaginate from "react-paginate";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";
export default function Booking() {
  // const [TABLE_ , setTABLE_] = useState({ths:[] , rows:[]})
  const [totalLength, settotalLength] = useState(1);
  const [page, setPage] = useState(1);
  let rows = [];
  const TABLE = {
    ths: [
      {
        title: "Nom",
        type: "text",
      },
      {
        title: "Prenom",
        type: "action",
      },
      {
        title: "Email",
        type: "action",
      },
    ],
    rows: rows,
  };
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    window.scrollTo(0, 0);
  };
  const [dataTable, setDataTable] = useState([]);
  return (
    <div className=" pl-52 w-full bg-mc-creme pt-10  h-screen">
      {/* <NavBar /> */}
      <GeneralTable TABLE={TABLE} funct="Start" />
      <div className="flex w-full justify-center items-center mt-32 md:mt-6    ">
        {totalLength != 0 ? (
          <ReactPaginate
            previousLabel={
              <div>
                <img className="w-3 mt-2" src={leftarrow} alt="rightarrow" />
              </div>
            }
            nextLabel={
              // <img src={rightarrow} alt="oeod" />
              <div>
                <img className="w-3 mt-2" src={rightarrow} alt="rightarrow" />
              </div>
            }
            pageCount={totalLength / 40}
            breakLabel={"..."}
            marginPagesDisplayed={4}
            // pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex"
            pageClassName=" m-1 py-2 md:px-6 px-2 md:py-3 rounded-[4px] md:text-xl text-base leading-tight text-akkar-orange bg-akkar-orange-second border  hover:bg-akkar-orange hover:text-akkar-white-creme "
            previousClassName="m-2 px-3 py-2 text-xl rounded-[4px]  leading-tight text-akkar-orange bg-akkar-orange-second border hover:bg-akkar-orange hover:text-akkar-white-creme "
            nextClassName="m-2 px-3  py-2 text-xl rounded-[4px]  leading-tight text-akkar-orange bg-akkar-orange-second border hover:bg-akkar-orange hover:text-akkar-white-creme "
            breakClassName="m-2 px-5 py-3 rounded-[4px] text-xl leading-tight text-akkar-orange bg-akkar-orange-second border  hover:bg-akkar-orange hover:text-akkar-white-creme"
            activeClassName=" m-2 px-5 py-3 text-xl rounded-[4px] leading-tight text-akkar-white-creme bg-akkar-orange "
          />
        ) : (
          <>
            <div className="h-screen w-full bg-akkar-orange-second flex justify-center items-center">
              <p className="text-5xl text-akkar-black ">No users yet!</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
