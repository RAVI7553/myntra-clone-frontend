import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // initial items are added from props itself
    },
  },
});

export const itemsActions = itemSlice.actions;
export default itemSlice;
