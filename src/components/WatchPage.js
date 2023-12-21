import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/appSlices";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [serachParams] = useSearchParams();
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
      <div className="bg-slate-200 border border-black w-full p-2 ml-1 h-[500]">
      <LiveChat/>
      </div>
      </div>
      <CommentContainer/>
      
      
    </div>
  );
};
export default WatchPage;
