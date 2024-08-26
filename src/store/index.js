import { configureStore } from "@reduxjs/toolkit";
import reducers from "./rootReducer";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

const store = configureStore({
  reducer: reducers,
});

const { dispatch } = store;

export { store, useDispatch, useSelector, dispatch };
