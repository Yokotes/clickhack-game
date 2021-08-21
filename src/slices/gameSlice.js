const { createSlice } = require("@reduxjs/toolkit");

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    money: 0,
  },
  reducers: {
    increaseMoney(state, {payload}) {
      state.money += payload;
    },
    decreaseMoney(state, {payload}) {
      state.money -= payload;
    },
  }
});

export default gameSlice.reducer;

export const {
  decreaseMoney,
  increaseMoney
} = gameSlice.actions;