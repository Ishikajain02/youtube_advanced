import React, { useState, useEffect } from "react";
const Videocontainer=()=>{
   // async function fn
  // const [cont,setcont]=useState([]);
  const[videocard,setcard]=useState([]);
  async function fn(){
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyChlI_oQ9vEBT_VB7xzLlyNSfxK5rv8Kco%20");
   const json = await data.json();
   console.log(json);
   console.log(json?.items[0]?.snippet?.title);
   setcard(json?.items);
   console.log(videocard?.items);
   console.log(videocard[0]?.thumbnails?.high?.url)
  // setcont(json);
  }
  

   useEffect(()=>{
   // const data = async fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyChlI_oQ9vEBT_VB7xzLlyNSfxK5rv8Kco%20");
   fn();
   
},[])
    return(
      <>
   <><div>hieeee</div></>
   <div className="border border-solid w-80 h-60">
  {/* <h1>{videocard?.items[0]?.snippet?.title}</h1>8*/}
    <h1 className="font text-sm">{videocard[0]?.snippet?.title}</h1>
    <img className="w-20 h-40 "src={videocard[0]?.snippet?.thumbnails?.high?.url}/>
   </div>
   </>
    )
}
export default Videocontainer;