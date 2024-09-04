import { combineReducers } from "redux";

import menuReducer from "./slices/menu";
import snackbarReducer from "./slices/snackbar";
import userReducer from "./slices/user";
import eventReducer from "./slices/event";
import dashboardReducer from "./slices/dashboard";

const reducers = combineReducers({
  menu: menuReducer,
  snackbar: snackbarReducer,
  user: userReducer,
  event: eventReducer,
  dashboard: dashboardReducer,
});

export default reducers;
