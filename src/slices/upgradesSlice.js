import { createSlice } from "@reduxjs/toolkit";

const upgradesSlice = createSlice({
  name: 'upgradesSlice',
  initialState: {
    upgrades: [
      {
        id: 0,
        title: 'Click+',
        img: '',
        description: '+50% click effect',
        cost: 500,
        effects: [
          {
            type: 'click',
            value: 0.5
          }
        ]
      }
    ],
  },
  reducers: {
    fillUpgrades(state, {payload}) {
      state.upgrades = payload;
    },

    removeUpgrade(state, {payload}) {
      state.upgrades = state.upgrades.filter(({id}) => id !== payload);
    }
  }
});

export default upgradesSlice.reducer;

export const {
  fillUpgrades,
  removeUpgrade,
} = upgradesSlice.actions;