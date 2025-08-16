import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: { loader: false },
  reducers: {
    ShowLoader: (state) => { state.loader = true },
    HideLoader: (state) => { state.loader = false }
  }
});

export const { ShowLoader, HideLoader } = settingsSlice.actions;
export default settingsSlice.reducer;
