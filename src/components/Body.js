import React from 'react'
import Sidebar from './Sidebar'
import Videocontainer from './Videocontainer'
import ButtonList from './ButtonList'
const Body = () => {
  return (
    <>
    <div className='grid grid-cols-12'>
    <div className='cols col-span-3'>
    <Sidebar/>
    </div>
    <div className='cols col-span-9'>
      <ButtonList/>
    <Videocontainer/>
    </div>
    </div>
    </>
  )
}

export default Body