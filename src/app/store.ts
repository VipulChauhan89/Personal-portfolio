import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "../features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
  },
})
