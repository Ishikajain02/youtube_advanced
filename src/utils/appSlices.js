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
        closeMenu :(state)=>{
            state.isMenuOpen = false;
        }
    },
});
export const {toggleMenu , closeMenu} = appSlices.actions;
export default appSlices.reducer;