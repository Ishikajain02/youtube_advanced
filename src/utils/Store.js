import { configureStore } from "@reduxjs/toolkit";
import appSlices from './appSlices';
import searchslice from "./searchslice";
import chatslice from "./ChatSlice"
const Store = configureStore({
   reducer :{
    app: appSlices,
    search:searchslice,
    chat:chatslice,
   },
});
export default Store;