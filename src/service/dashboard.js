import { dispatch } from "../store";
import { loadingSuccess } from "../store/slices/dashboard";
import axiosServices from "../utils/axios";

export const receivedGiftService = (id) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.get(`/gift/received/${id}`);
      console.log(response);

      // dispatch(invitesListSuccess({ invites: response.data.invites }));
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
      console.log(response);

      // dispatch(invitesListSuccess({ invites: response.data.invites }));
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
      console.log(response);

      // dispatch(invitesListSuccess({ invites: response.data.invites }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};
