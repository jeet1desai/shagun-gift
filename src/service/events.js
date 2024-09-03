import { createEventSuccess, eventListSuccess, findUserSuccess, loadingSuccess } from "../store/slices/event";
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
      dispatch(createEventSuccess({ event: response.data.event }));
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
      dispatch(createEventSuccess({ event: response.data.event }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};
