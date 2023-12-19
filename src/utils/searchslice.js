import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
    name: "search",
    initialState:{
       
    },
    reducers:{
     cacheresults:(state,action)=>{
           state= Object.assign(state,action.payload);
     }
    }
})
export const {cacheresults} = searchslice.actions;
export default searchslice.reducer;
//implement lru cache for optimising cache