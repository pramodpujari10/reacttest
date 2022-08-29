import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  let dataUrl = "https://reqres.in/api/users";
  let response = await axios.get(dataUrl);
  //   console.log(response.data.data);
  return response.data.data;
});

const initialState = {
  loading: false,
  users: [],
  errorMessage: null,
};

export const userListSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.errorMessage = "Something went wrong";
      });
  },
});

export default userListSlice.reducer;
