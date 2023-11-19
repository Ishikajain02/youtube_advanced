 const VideoCard = ({info})=>{
    return(
        <>
          <div className="border border-solid w-80 h-60">
  {/* <h1>{videocard?.items[0]?.snippet?.title}</h1>8*/}
    <h1 className="font text-sm">{info?.snippet?.title}</h1>
    <img className="w-20 h-40 "src={info?.snippet?.thumbnails?.high?.url}/>
   </div>
   </>
    )
 }
 export default VideoCard;