import cartReducer from "./slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer :{
        cart:cartReducer,
    }
})