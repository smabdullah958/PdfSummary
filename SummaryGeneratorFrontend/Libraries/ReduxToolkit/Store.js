"use client";
import { configureStore } from "@reduxjs/toolkit";
import LogInSlice from "@/Libraries/ReduxToolkit/Slices/LogInSlice";
import PostFormSlice from "@/Libraries/ReduxToolkit/Slices/PostFormSlice";
import CheckLogInSlice from "@/Libraries/ReduxToolkit/Slices/CheckLogInSlice";
import LogOutSlice from "@/Libraries/ReduxToolkit/Slices/LogOutSlice";

export const store = configureStore({
  reducer: {
    LogInSlice,
    PostFormSlice,
    CheckLogInSlice,
    LogOutSlice,
  },
});
