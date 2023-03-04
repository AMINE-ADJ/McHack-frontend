import React from 'react'
import Logo from '../assets/Logo.svg'
import Dashboard from '../assets/Dashboard.svg'
import { Link } from 'react-router-dom'
// import Logo from '../assets/Logo.svg'
// import Logo from '../assets/Logo.svg'
export default function SideBar() {
  return (
    <div className='bg-white fixed flex flex-col top-0 h-screen left-0 items-center gap-24 pt-10 w-[200px]'>
      <div>
        <img className='w-40' src={Logo} alt='Logo'/>
      </div>

      <div className='flex flex-col gap-10'>
        <Link to={'/acceuil/dashboard/booking'} className='flex gap-5 focus:text-mc-red hover:text-mc-red items-end '>
          <div>
            {/* <img className='w-10  fill-black focus:fill-mc-red' src={Dashboard}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/> </svg>
          </div>
          <p className='font-OpenSans font-thin text-xl '>Dashboard</p>
        </Link>
        <Link to={'/acceuil/setting'} className='flex gap-5 focus:text-mc-red hover:text-mc-red items-center '>
          <div>
            {/* <img className='w-10  fill-black focus:fill-mc-red' src={Dashboard}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
          <p className='font-OpenSans font-thin text-xl '>Tests</p>
        </Link>
        <Link to={'/acceuil/logout'} className='flex gap-5 focus:text-mc-red hover:text-mc-red items-end '>
          <div>
            {/* <img className='w-10  fill-black focus:fill-mc-red' src={Dashboard}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9-4-4m4 4-4 4m4-4H9"/></svg>
          </div>
          <p className='font-OpenSans font-thin text-xl '>Logout</p>
        </Link>
      </div>
    </div>
  )
}
