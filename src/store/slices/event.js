import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  event: null,
  events: [],
  guest: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    createEventSuccess(state, action) {
      const { event } = action.payload;
      state.event = event;
      state.events = [...state.events, event];
      state.loading = false;
    },
    eventListSuccess(state, action) {
      const { events } = action.payload;
      state.events = events;
      state.loading = false;
    },
    findUserSuccess(state, action) {
      const { guest } = action.payload;
      state.guest = guest;
      state.loading = false;
    },
    getEventSuccess(state, action) {
      const { event } = action.payload;
      state.event = event;
      state.loading = false;
    },
    loadingSuccess(state, action) {
      const { loading } = action.payload;
      state.loading = loading;
    },
  },
});

export const { createEventSuccess, eventListSuccess, loadingSuccess, findUserSuccess, getEventSuccess } = eventSlice.actions;

export default eventSlice.reducer;
