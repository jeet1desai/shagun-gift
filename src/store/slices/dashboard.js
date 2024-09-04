import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  gifts: [],
  guests: [],
  contribution: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    receivedGiftSuccess(state, action) {
      const { gifts } = action.payload;
      state.loading = false;
      state.gifts = gifts;
    },
    contributionSuccess(state, action) {
      const { contribution } = action.payload;
      state.loading = false;
      state.contribution = contribution;
    },
    topGuestHostSuccess(state, action) {
      const { guests } = action.payload;
      state.loading = false;
      state.guests = guests;
    },
    loadingSuccess(state, action) {
      const { loading } = action.payload;
      state.loading = loading;
    },
  },
});

export const { topGuestHostSuccess, receivedGiftSuccess, loadingSuccess, contributionSuccess } = dashboardSlice.actions;

export default dashboardSlice.reducer;
