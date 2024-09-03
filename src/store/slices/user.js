import { createSlice } from "@reduxjs/toolkit";
import { cookieStorage } from "../../utils/cookie";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSuccess(state, action) {
      const { user } = action.payload;
      state.user = user;
      state.isLoggedIn = true;
      state.loading = false;
    },
    logoutSuccess(state, action) {
      state.user = null;
      state.loading = false;
      state.isLoggedIn = false;
    },
    loadingSuccess(state, action) {
      const { loading } = action.payload;
      state.loading = loading;
    },
  },
});

export const { userSuccess, logoutSuccess, loadingSuccess } = userSlice.actions;

export default userSlice.reducer;
