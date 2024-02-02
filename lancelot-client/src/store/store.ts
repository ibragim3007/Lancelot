import { snackReducer } from './reducers/snackbar/snackbarSlice';
import { userReducer } from './reducers/userInfo/userSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  userReducer,
  snackReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];