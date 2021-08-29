import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: 'inventorySlice',
  initialState: {
    items: [
      {
        id: 0,
        title: 'Trojan',
        type: 'bonus',
        img: '',
        description: 'x2 click effect',
        count: 2,
        effectValue: 2,
      },
      {
        id: 1,
        title: 'Worm',
        type: 'timer',
        img: '',
        description: 'Increase progress by 10 every 1 second',
        count: 5,
        effectValue: 10,
      }
    ]
  },
  reducers: {
    fillItems(state, {payload}) {
      state.items = payload;
    },
    addItem(state, {payload}) {
      const item = state.items.filter((item) => item.id === payload.id)[0];

      if (item) {
        item.count += payload.count;
      } else {
        state.items.push(payload);
      }
    },
    removeItem(state, {payload}) {
      const item = state.items.filter((item) => item.id === payload)[0];

      if (item.count > 1) {
        item.count--;
      } else {
        state.items = state.items.filter((item) => item.id !== payload);
      }
    }
  }
});

export default inventorySlice.reducer;

export const {
  fillItems,
  addItem: addInventoryItem,
  removeItem: removeInventoryItem,
} = inventorySlice.actions;