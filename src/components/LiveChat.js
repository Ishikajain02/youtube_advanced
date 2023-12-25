import { useEffect } from "react";
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";

const LiveChat=()=>{
    const dispatch= useDispatch();
    const chatmessage=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
       const timer=setInterval(()=>{
        console.log("Hi I am API polling")
        dispatch(addMessage({
            name:"Akshay Saini",
            message:"Lorem Ipsum lit",
           }));
       },2000);
      
       return ()=>clearInterval(timer);
    },  [])
    return(
        <>
        <div className="bg-slate-200 border border-black w-full p-2 ml-1 h-[31rem] overflow-y-scroll">
            {chatmessage.map((c,i)=> <ChatMessage key ={i}name={c.name} message={c.message}/>)
       }
        </div>
        </>
    )
}
export  default LiveChat;