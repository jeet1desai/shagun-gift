import { combineReducers } from "redux";

import menuReducer from "./slices/menu";
import snackbarReducer from "./slices/snackbar";
import userReducer from "./slices/user";

const reducers = combineReducers({
  menu: menuReducer,
  snackbar: snackbarReducer,
  user: userReducer,
});

export default reducers;
