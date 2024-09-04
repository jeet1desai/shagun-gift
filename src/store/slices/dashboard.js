import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
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

export const { logoutSuccess, loadingSuccess } = dashboardSlice.actions;

export default dashboardSlice.reducer;
