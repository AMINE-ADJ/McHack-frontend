import React, { useState } from 'react';

function GeneralTable({TABLE , AN , funct}) {
  if (!TABLE.ths.length) return <></>
   
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full px-24 border-separate border-spacing-2 ">
          {/* <!-- head --> */}
          <thead >
            <tr className=''>
                <th className='rounded-xl bg-transparent'>
              
              </th>
             {
                TABLE.ths.map(elem=><th className='rounded-xl bg-[#EEEEEE] text-night text-lg text-mc-blue py-4'>{elem.title}</th>)
             }
              
            </tr>
          </thead>
          <tbody className='text-xs'>
                {
                    ! TABLE.rows.length ? (
                    <>
                    <tr >
                      <th className='rounded-xl w-10 bg-[#EEEEEE] py-4'>
                        <label>
                          {1}
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl w-20   bg-gray-400'> <button className='text-base font-bold  px-6 '>{funct}</button></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }

                      </tr>
                    <tr >
                      <th className='rounded-xl w-10 bg-[#EEEEEE] py-4'>
                        <label>
                          {2}
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl w-20   bg-gray-400'> <button className='text-base font-bold  px-6 '>{funct}</button></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }

                      </tr>
                    <tr >
                      <th className='rounded-xl w-10 bg-[#EEEEEE] py-4'>
                        <label>
                          {3}
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl w-20   bg-gray-400'> <button className='text-base font-bold  px-6 '>{funct}</button></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }

                      </tr>
                    <tr >
                      <th className='rounded-xl w-10 bg-[#EEEEEE] py-4'>
                        <label>
                          {4}
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl w-20   bg-gray-400'> <button className='text-base font-bold  px-6 '>{funct}</button></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }

                      </tr>
                    <tr >
                      <th className='rounded-xl w-10 bg-[#`1w`] py-4'>
                        <label>
                          {5}
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl w-20   bg-gray-400'> <button className='text-base font-bold  px-6 '>{funct}</button></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }

                      </tr>
                      {/* <tr >
                      <th className='rounded-xl bg-[#EEEEEE]'>
                        <label>
                          <input type="checkbox" className="checkbox bg-night" />
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }
                      </tr>
                      <tr >
                      <th className='rounded-xl bg-[#EEEEEE]'>
                        <label>
                          <input type="checkbox" className="checkbox bg-night" />
                        </label>
                      </th>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      <td className='animate-pulse rounded-xl bg-gray-400'></td>
                      {AN && <td className='animate-pulse rounded-xl bg-gray-400'></td> }
                      </tr> */}
                    </>):(
                    TABLE.rows.map((row,rowIndex)=>{
                        return (
                            <tr >
                            <th className='rounded-xl bg-[#EEEEEE]'>
                            <label>
                              {/* <input type="checkbox" className="checkbox bg-night" /> */}
                              {rowIndex}
                            </label>
                          </th>
                                {
                                row.map((rowElem , rowElemIndex)=> {
                                  return(
                                    <td className='rounded-xl bg-[#EEEEEE]'> {rowElem[0]} </td>
                                  )
                                    // const type = TABLE.ths[rowElemIndex].type
                                    
                                    // if (type == "user" )
                                    //     return <User img={rowElem[0]} fullname={rowElem[1]} />
                                    // if (type == "action" )
                                    //     return <Action onClick={rowElem[0]} title={rowElem[1]} />
                                    // else return <td className='rounded-xl bg-[#EEEEEE]'>{rowElem[0]}</td>
                                        
                                })}
                            </tr>
                        )
                        
                    }))
                }
            
          
          </tbody>
        
        </table>
      </div>
    );
}

export default GeneralTable;



// function User({img,fullname}) {
//     return (
//         <td className='rounded-xl bg-[#EEEEEE]'>
//         <div className="flex items-center space-x-3">
//          {img && img!="noImage" ?  <div className="avatar"><div className="mask mask-squircle w-12 h-12"><img src={img} alt="Avatar Tailwind CSS Component" /></div></div>:undefined}
//           <div>
//             <div className="font-bold">{fullname}</div>
//           </div>
//         </div>
//       </td>
//     );
// }

// function Action ({onClick , title}) {
//   const [tit , usetit] = useState(title)
//     return ( <th onClick={()=>{usetit("Done!")}} className='rounded-xl bg-[#EEEEEE]'>
//         <button onClick={onClick} className="btn btn-ghost btn-xs text-xs   text-night">{tit}</button>
//       </th>)
// }

