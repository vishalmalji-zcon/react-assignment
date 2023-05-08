import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './slices/projectslice'

export const store = configureStore({
    reducer: {
        project: projectReducer,

    }
})