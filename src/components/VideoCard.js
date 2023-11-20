 const VideoCard = ({info})=>{
    const {snippet ,statistics} = info;
    const {thumbnails, title ,channelTitle} = snippet;
    console.log(info);
    return(
        <>
       
        
          <div className="shadow-lg w-72 m-2 p-2">
          <img className src={thumbnails?.medium?.url}/>
         <ul>
         <li className="font-bold p-2">{title}</li>
            <li >{channelTitle}</li>
            <li>{statistics.viewCount}Views</li>
         </ul>
   
    </div>
   </>
    )
 }
 export default VideoCard;