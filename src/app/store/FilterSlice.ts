import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  fullName: string;
  company: string;
  presence: boolean | null;
}

const initialState: FilterState = {
  fullName: '',
  company: '',
  presence: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFullNameFilter(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    setCompanyFilter(state, action: PayloadAction<string>) {
      state.company = action.payload;
    },
    setPresenceFilter(state, action: PayloadAction<boolean | null>) {
      state.presence = action.payload;
    },
    resetFilters(state) {
      state.fullName = '';
      state.company = '';
      state.presence = null;
    },
  },
});

export const { 
  setFullNameFilter, 
  setCompanyFilter, 
  setPresenceFilter, 
  resetFilters 
} = filterSlice.actions;

export default filterSlice.reducer;