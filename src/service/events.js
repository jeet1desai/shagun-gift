import { createEventSuccess, eventListSuccess, loadingSuccess } from "../store/slices/event";
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
