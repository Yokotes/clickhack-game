import { decreaseMoney, increaseMoney, increaseVar } from '../slices/gameSlice';
import { removeInventoryItem } from '../slices/inventorySlice';
import { addItemToActiveSlot, clearTaskProgress, clearTaskSlots, increaseTaskProgress } from '../slices/tasksSlice';
import { removeUpgrade } from '../slices/upgradesSlice';
import store from '../store';

export default class GameService {

  // Array of active tasks timers
  activeTasks = [];
  
  // Game timer id
  gameTimer = null;

  startTimer = () => {
    this.gameTimer = setInterval(() => {
      for (let i = 0; i < this.activeTasks.length; i++) {
        const {id, progress} = this.activeTasks[i];
        const task = store.getState().tasks.tasks.filter(task => task.id === id)[0];

        this.setTaskProgress(task, progress);
      }
    }, 1000);
  }

  setTaskActive = (task) => {
    //
    // @Bug: Something wrong with active slots
    //

    const taskId = task.id;
    const timerType = task.activeSlots.filter(item => item.type === 'timer');
    const taskProgress = timerType.reduce((sum, item) => sum += item.effectValue, 0);
    const alreadyExist = this.activeTasks.filter(task => task.id === taskId)[0];

    if (alreadyExist) return;

    this.activeTasks.push({
      id: taskId,
      progress: taskProgress,
    })
  }

  setTaskProgress = (task, progress) => {
    const bonusTypes = task.activeSlots.filter(item => item.type === 'bonus');
    const bonus = bonusTypes.reduce((sum, item) => sum += item.effectValue, 0);

    store.dispatch(increaseTaskProgress({
      id: task.id,
      progress: progress * (bonus ? bonus : 1)
    }));

    if (task.progress >= 90) {
      store.dispatch(clearTaskProgress(task.id));
      store.dispatch(clearTaskSlots(task.id));
      store.dispatch(increaseMoney(task.reward.money));
      this.activeTasks = this.activeTasks.filter(activeTask => activeTask.id !== task.id);
    }
  }

  addItemToCurrentTask = (item) => {
    const tasks = store.getState().tasks.tasks;
    const taskId = store.getState().tasks.current;
    const currentTask = tasks.filter(task => task.id === taskId)[0];
    
    if (!currentTask) return;

    // Check if item already in task slots
    const hasItem = currentTask.activeSlots.filter(taskItem => taskItem.id === item.id)[0];
    if (hasItem) return;

    // Remove item from user's inventory
    store.dispatch(removeInventoryItem(item.id));

    // Add item to task slots
    store.dispatch(addItemToActiveSlot(item));

    // Add item effect to task if item type is 'timer'
    if (item.type === 'timer') {
      const activeTask = this.activeTasks.filter(task => task.id === taskId)[0];

      if (!activeTask) return;

      activeTask.progress += item.effectValue;
    }
  }

  buyUpgrade({id, cost, effects}) {
    const game = store.getState().game;

    // Check if user have enough money
    if (game.money < cost) return;

    // Remove upgrade from store
    store.dispatch(removeUpgrade(id));

    // Decrease user money
    store.dispatch(decreaseMoney(cost));

    // Apply upgrade effects
    for (let i = 0; i < effects.length; i++) {
      store.dispatch(increaseVar({
        type: effects[i].type,
        value: effects[i].value * game.vars[effects[i].type]
      }));
    }
  }
}