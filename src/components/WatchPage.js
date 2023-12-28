import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlices";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import Button from "./Button";
import { addMessage } from "../utils/ChatSlice";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [serachParams] = useSearchParams();
  const [inputchat , setinputchat] =useState("");
 console.log( serachParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
      <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+ serachParams.get("v")} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe></div>
      <div className="w-full">
      <LiveChat/>
      <form className="flex flex-row p-4  justify-center" onSubmit={(e)=>{
        e.preventDefault();
        
      }}>
      <input className="w-96 h-4 p-4 border border-black rounded-xl  " value={inputchat} onChange={(e)=>setinputchat(e.target.value)}>
      </input>
      <button className=" bg-red-600 rounded-xl p-2" type="Submit" onClick={()=>{dispatch(addMessage({name:"Ishika",message:inputchat})); setinputchat("")}}>Submit</button>
      </form>
      </div>
      </div>
      <CommentContainer/>
      
      
    </div>
  );
};
export default WatchPage;
