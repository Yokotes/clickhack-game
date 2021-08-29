import { createSlice } from "@reduxjs/toolkit";
import GameService from "../services/gameService";

const gameServiceSlice = createSlice({
  name: 'gameServiceSlice',
  initialState: {
    gameService: new GameService()
  },
  reducers: {
    setGameService(state, {payload}) {
      state.gameService = payload;
    },
    buyUpgrade() {},
    addItemToCurrentTask() {},
    setTaskActive() {},
    startGameTimer() {},
    setTaskProgress() {},
  }
});

export default gameServiceSlice.reducer;

export const {
  buyUpgrade,
  setGameService,
  addItemToCurrentTask,
  setTaskActive,
  startGameTimer,
  setTaskProgress,
} = gameServiceSlice.actions;