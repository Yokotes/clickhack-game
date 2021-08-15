import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState: {
    current: {},
    tasks: [
      {
        id: 0,
        title: 'Task 1',
        description: 'Awesome description',
        img: '',
        progress: 0,
      }
    ]
  },
  reducers: {
    fillTasks(state, {payload}) {
      state.tasks = payload;
    },

    removeTask(state, {payload}) {
      state.tasks = state.tasks.filter(({id}) => id !== payload);
    },

    setCurrentTask(state, {payload}) {
      state.current = state.tasks[payload];
    }
  }
});

export default tasksSlice.reducer;

export const {
  fillTasks,
  removeTask,
  setCurrentTask,
} = tasksSlice.actions;