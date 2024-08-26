import { combineReducers } from "redux";

import menuReducer from "./slices/menu";
import snackbarReducer from "./slices/snackbar";

const reducers = combineReducers({
  menu: menuReducer,
  snackbar: snackbarReducer,
});

export default reducers;
