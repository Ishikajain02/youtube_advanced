import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
const Videocontainer=()=>{
   // async function fn
  // const [cont,setcont]=useState([]);
  const[videocard,setcard]=useState([]);
  async function fn(){
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyChlI_oQ9vEBT_VB7xzLlyNSfxK5rv8Kco%20");
   const json = await data.json();
   console.log(json.items);
  
   setcard(json?.items);
   
  // setcont(json);
  }
  

   useEffect(()=>{
   // const data = async fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyChlI_oQ9vEBT_VB7xzLlyNSfxK5rv8Kco%20");
   fn();
   
},[])
    return(
      <div className="flex flex-wrap ">
      {videocard.map(video=><VideoCard  key= {video.id}info={video}/>)}
      
   </div>
    )
}
export default Videocontainer;