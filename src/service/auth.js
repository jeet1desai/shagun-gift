import { dispatch } from "../store";
import { loadingSuccess, userSuccess } from "../store/slices/user";
import axiosServices from "../utils/axios";

export const authService = (body) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.post(`/auth`, body);
      dispatch(userSuccess({ user: response.data.user }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};

export const changeNameService = (body) => {
  return async () => {
    try {
      dispatch(loadingSuccess({ loading: true }));
      const response = await axiosServices.patch(`/auth/name`, body);
      dispatch(userSuccess({ user: response.data.user }));
    } catch (error) {
      dispatch(loadingSuccess({ loading: false }));
    }
  };
};
