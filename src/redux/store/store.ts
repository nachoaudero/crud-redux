import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@/redux/users/usersSlice";

// Creacion del store de redux toolkit donde agregaremos todos nuestros reducers, middlewares, etc.
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
