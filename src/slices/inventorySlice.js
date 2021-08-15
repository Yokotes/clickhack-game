import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: 'inventorySlice',
  initialState: {
    items: [
      {
        id: 0,
        title: 'item 1',
        img: '',
        description: '',
        count: 2
      }
    ]
  },
  reducers: {
    fillItems(state, {payload}) {
      state.items = payload;
    },
    addItem(state, {payload}) {
      state.items.push(payload);
    },
    removeItem(state, {payload}) {
      state.items = state.items.filter((item) => item.id !== payload);
    }
  }
});

export default inventorySlice.reducer;

export const {
  fillItems,
  addItem: addInventoryItem,
  removeItem: removeInventoryItem,
} = inventorySlice.actions;