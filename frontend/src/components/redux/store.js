import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice.js'
import jobSlice from "./jobSlice.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
        job: jobSlice       

    }
})

export default store