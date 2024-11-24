import { createSlice } from "@reduxjs/toolkit";

const cartdata = createSlice({
    name: "cart",
    initialState :{
       cartitems :[],
    },
    reducers :{
        additemscart:(state,action)=>{
          state.cartitems.push(action.payload)
         // console.log(action.payload);
        }
    }
});
 
   export const {additemscart} = cartdata.actions;
   export default cartdata.reducer;