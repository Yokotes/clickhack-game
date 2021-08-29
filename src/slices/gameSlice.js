const { createSlice } = require("@reduxjs/toolkit");

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    money: 0,
    vars: {
      click: 10,
    }
  },
  reducers: {
    increaseMoney(state, {payload}) {
      state.money += payload;
    },
    decreaseMoney(state, {payload}) {
      state.money -= payload;
    },
    increaseVar(state, {payload}) {
      state.vars[payload.type] += payload.value;
    }
  }
});

export default gameSlice.reducer;

export const {
  decreaseMoney,
  increaseMoney,
  increaseVar,
} = gameSlice.actions;