import { useEffect } from "react";
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generate, generateRandomText } from "./helper";

const LiveChat=()=>{
    const dispatch= useDispatch();
    const chatmessage=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
       const timer=setInterval(()=>{
        console.log("Hi I am API polling")
        dispatch(addMessage({
            name:generate(),
            message:generateRandomText(20),
           }));
       },500);
      
       return ()=>clearInterval(timer);
    },  [])
    return(
        <>
        <div className="bg-slate-200 border border-black w-full p-2 ml-1 h-[31rem] overflow-y-scroll flex flex-col-reverse">
            {chatmessage.map((c,i)=> <ChatMessage key ={i}name={c.name} message={c.message}/>)
       }
        </div>
        </>
    )
}
export  default LiveChat;