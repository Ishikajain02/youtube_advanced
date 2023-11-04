import React from 'react'
import Sidebar from './Sidebar'
import Videocontainer from './Videocontainer'
const Body = () => {
  return (
    <>
    <div className='grid grid-cols-12'>
    <div className='cols col-span-3'>Sidebar
    <Sidebar/>
    </div>
    <div className='cols col-span-9'>
    <Videocontainer/>
    </div>
    </div>
    </>
  )
}

export default Body