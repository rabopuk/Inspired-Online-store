import { configureStore } from "@reduxjs/toolkit";
import { setStatusServer } from "./features/statusServerSlice.js";
import { rootReducer } from "./rootReducer.js";

const errorMiddleware = store => next => action => {
  if (action.type.endsWith('/rejected')) {
    store.dispatch(setStatusServer(false));
  }

  if (action.type.endsWith('/fulfilled')) {
    store.dispatch(setStatusServer(true));
  }

  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware),
});

export default store;