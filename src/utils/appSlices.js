import { createSlice } from "@reduxjs/toolkit";

const appSlices = createSlice({
    name : "app",
    initialState :{
          isMenuOpen : true,
    },
    reducers:{
        toggleMenu :(state)=>{
           state.isMenuOpen= !state.isMenuOpen;
        },
    },
});
export const {toggleMenu} = appSlices.actions;
export default appSlices.reducer;