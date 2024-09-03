import { combineReducers } from "redux";

import menuReducer from "./slices/menu";
import snackbarReducer from "./slices/snackbar";
import userReducer from "./slices/user";
import eventReducer from "./slices/event";

const reducers = combineReducers({
  menu: menuReducer,
  snackbar: snackbarReducer,
  user: userReducer,
  event: eventReducer,
});

export default reducers;
