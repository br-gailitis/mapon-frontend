import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Unit } from "../services/maponService";

export type UnitsState = {
  units: Unit[];
  selected: Unit | null;
}

const initialState: UnitsState = {
  units: [],
  selected: null
};

const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    setUnits(state, action: PayloadAction<Unit[]>) {
      state.units = action.payload;
    },
    selectUnit(state, action: PayloadAction<string>) {
      const unit = state.units.find(unit => unit.number === action.payload);
      if (unit) state.selected = unit;
    }
  }
});

export const { setUnits } = unitsSlice.actions;
export const { selectUnit } = unitsSlice.actions;

export default unitsSlice.reducer;