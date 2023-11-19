import { configureStore } from "@reduxjs/toolkit";
import appSlices from './appSlices';
const Store = configureStore({
   reducer :{
    app: appSlices,
   },
});
export default Store;