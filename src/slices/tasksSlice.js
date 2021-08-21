import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState: {
    current: null,
    tasks: [
      {
        id: 0,
        title: 'Task 1',
        description: 'Awesome description',
        img: '',
        progress: 0,
        activeSlots: [],
        reward: {
          items: [],
          money: 10,
        }
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
      state.current = payload;
    },

    increaseTaskProgress(state, {payload}) {
      const task = state.tasks.filter(task => task.id === payload.id)[0];
      if (!task) return;

      task.progress += payload.progress;
    },

    clearTaskProgress(state, {payload}) {
      const task = state.tasks.filter(task => task.id === payload)[0];
      if (!task) return;

      task.progress = 0;
    }
  }
});

export default tasksSlice.reducer;

export const {
  fillTasks,
  removeTask,
  setCurrentTask,
  increaseTaskProgress,
  clearTaskProgress
} = tasksSlice.actions;