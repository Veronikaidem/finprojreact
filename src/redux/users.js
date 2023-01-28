import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (user) => {
  try {
    const identification = `users/${user.register ? "register" : "login"}`;
    const { data } = await axios.post(
      `http://localhost:3001/${identification}`,
      user.userValue
    );
    localStorage.setItem("token", data.token);
    localStorage.setItem("refresh_token", data.refreshToken);
    return data;
  } catch (error) {
   
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    load: false,
    userData: null,
    error: null
  },
  reducers: {
    logoutUser: (state) => {
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.load = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state,action) => {
      state.load = false
      state.userData =action?.payload?.user
    });
    
    builder.addCase(fetchUsers.rejected, (state) => {
      state.load = false;
      state.error = "error";
    });
  },
});

export const userReducer = userSlice.reducer;
export const {logoutUser} = userSlice.actions;

export const useUserInfo = () => useSelector((state) => state?.user?.userData);
export const useAdmin = () => useSelector((state) => state?.user?.userData?.role[0]);