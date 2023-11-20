import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/appSlices";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [serachParams] = useSearchParams();
 console.log( serachParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+ serachParams.get("v")} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};
export default WatchPage;
