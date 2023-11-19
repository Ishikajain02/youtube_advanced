import React from 'react'
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  if(isMenuOpen!=true)return null;
  return (
    <>
    <div className="flex flex-col shadow-lg w-60">
        <div className="p-7 flex flex-col">
         Home
        </div>
        <div className='p-7 '>
        Shorts
        </div>
        <div>
        
        </div>
        <div>
            
        </div>
        <div>
            
        </div>
        <div>
            
        </div>
        <div>
            
        </div>
    </div>
    </>
  )
}

export default Sidebar