import { configureStore } from "@reduxjs/toolkit";
import appSlices from './appSlices';
import searchslice from "./searchslice";
const Store = configureStore({
   reducer :{
    app: appSlices,
    search:searchslice,
   },
});
export default Store;