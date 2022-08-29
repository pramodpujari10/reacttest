import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./userList";

export const store = configureStore({
  reducer: { users: userListSlice },
});
