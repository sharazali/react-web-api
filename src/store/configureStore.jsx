import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartreducer from "../store/cart";

const store = configureStore(
    {
        reducer:{
            cart: createReducer,
        }
    });
