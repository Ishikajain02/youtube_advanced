import React from 'react'

export default function ChatMessage({name,message}) {
  return (
    
    <div className='flex p-2  shadow-sm items-center'>
      {/*<img clasname='' src=""></img>*/}
      <img className="h-8 w-8 "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&usqp=CAU"/>
      <h1 className='font-bold px-2'>{name}</h1>
      <p className='px-2 '>{message}</p>
    
    </div>
  )
}
