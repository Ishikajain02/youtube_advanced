import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlices';

const Head = () => {
   const dispatch = useDispatch();
   const[searchquery ,setsearchquery]=useState("");
   const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
   }
   const  search = async ()=>{
    const data = await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyChlI_oQ9vEBT_VB7xzLlyNSfxK5rv8Kco%20&q="+ searchquery);
   //hide api keys and api
    const json = await data.json();
    console.log("api");
    console.log(json);
}
   useEffect(()=>{
    const timer =setTimeout(()=>search(),200);
      // search();
 return ()=>{
  clearTimeout(timer);
 }
   },[searchquery]);
   
   return(
  <div className=" grid grid-cols-12 gap-4 shadow-md p-4">
    <div className="cols col-span-3 flex flex-row ">
      
      <img onClick={()=>toggleMenuHandler()}className="h-8 w-8 cursor-pointer " alt="youtube" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"></img>
      
      <img className="h-8 w-8 ml-4" alt="icon" src="https://static-00.iconduck.com/assets.00/youtube-icon-2048x1450-n77mmhe0.png"></img>
      

    </div>
    
      <div className=' cols col-span-6 flex flex-row'>
      <input type="search" value={searchquery} onChange={(e)=>{setsearchquery(e.target.value)}}placeholder="Search " className="border-b-2 w-11/12 rounded-l-3xl  border-gray-200 py-3 px-7"></input>
      <button className="h-12 bg-gray-200 py-3 px-7 w-14 rounded-r-3xl">
      🔍
      </button>
      <div className=''>
        <ul>
          <li>hiii</li>
        </ul>
      </div>
    
    </div>
    <div className="cols col-span-3 ">
      yoooo
    </div>
  </div>
   )
}

export default Head;