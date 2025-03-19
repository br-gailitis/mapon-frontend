import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Route } from "../services/maponService";

export type RoutesSlice = {
  routes: Route[];
}

const initialState: RoutesSlice = {
  routes: [],
};


const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes(state, action: PayloadAction<Route[]>) {
      state.routes = action.payload;
    }
  }
});

export const { setRoutes } = routesSlice.actions;

export default routesSlice.reducer;