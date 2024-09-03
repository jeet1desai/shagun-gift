import { createEventSuccess, eventListSuccess, findUserSuccess, getEventSuccess, loadingSuccess } from "../store/slices/event";
import { dispatch } from "../store";
import axiosServices from "../utils/axios";

export const eventsListService = (id) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.get(`/events/${id}`);
      dispatch(eventListSuccess({ events: response.data.events }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const eventsDetailService = (id) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.get(`/event/${id}`);
      dispatch(getEventSuccess({ event: response.data.event }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const createEventService = (body) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.post(`/event/create`, body);
      dispatch(createEventSuccess({ event: response.data.event }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const findUserService = (body) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.post(`/user/find`, body);
      dispatch(findUserSuccess({ guest: response.data.user }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const createGuestService = (id, body) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.post(`/guest/event/${id}`, body);
      dispatch(getEventSuccess({ event: response.data.event }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const changeStatusService = (id, body) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      await axiosServices.put(`/status/event/${id}`, body);
      dispatch(loadingSuccess({ loading: false}));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};
