import { dispatch } from "../store";
import { contributionSuccess, loadingSuccess, receivedGiftSuccess, topGuestHostSuccess } from "../store/slices/dashboard";
import axiosServices from "../utils/axios";

export const receivedGiftService = (id) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.get(`/gift/received/${id}`);
      dispatch(receivedGiftSuccess({ gifts: response.data.gifts }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const topGuestHostService = (id) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.get(`/host/guest/${id}`);
      dispatch(topGuestHostSuccess({ guests: response.data.guests
 }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const contributionGiftService = (id) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.get(`/contribution/gift/${id}`);
      dispatch(contributionSuccess({ contribution: response.data.contribution }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};
