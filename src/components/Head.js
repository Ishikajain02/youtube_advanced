import React from 'react'
import Sidebar from './Sidebar'

const Head = () => (
  <div className=" grid grid-cols-12 gap-4 shadow-md p-4">
    <div className="cols col-span-3 flex flex-row ">
      <img className="h-8 w-8 " src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"></img>
      <img className="h-8 w-8 ml-4" src="https://static-00.iconduck.com/assets.00/youtube-icon-2048x1450-n77mmhe0.png"></img>
      

    </div>
    
      <div className=' cols col-span-6 flex flex-row'>
      <input type="search" placeholder="Search " className="border-b-2 w-11/12 rounded-l-3xl  border-gray-200 py-3 px-7"></input>
      <button className="h-12 bg-gray-200 py-3 px-7 w-14 rounded-r-3xl">
      <img className="h-10 w-14" alt= "img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvJdOzmSUu0o1hGgTMsM8JIBPVxEU7ux_8A&usqp=CAU"></img>
      </button>
    
    </div>
    <div className="cols col-span-3 ">
      yoooo
    </div>
  </div>
)

export default Head