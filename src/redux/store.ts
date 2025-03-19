import { configureStore } from '@reduxjs/toolkit';
import unitsReducer from './unitsSlice'
import routesReducer from './routesSlice'

const store = configureStore({
  reducer: {
    unitsReducer,
    routesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;