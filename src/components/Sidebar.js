import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  if(!isMenuOpen)return null;
  return (
    <>
    <div className=" shadow-lg w-48  ">
      <Link to ="/"> <div className="p-7 ">
         Home
        </div></Link> 
        <div className='p-7 '>
        Shorts
        </div>
        
       
    </div>
    </>
  )
}

export default Sidebar;