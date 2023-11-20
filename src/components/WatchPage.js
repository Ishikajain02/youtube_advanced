import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/appSlices";
const WatchPage=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());
    },[])
    return(
        <>
        <h1>watch</h1>

        </>
    )
}
export default WatchPage;