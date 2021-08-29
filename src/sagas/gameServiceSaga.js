import { takeLatest, call, select } from '@redux-saga/core/effects';
import { 
  addItemToCurrentTask, 
  buyUpgrade, 
  setTaskActive, 
  setTaskProgress, 
  startGameTimer 
} from '../slices/gameServiceSlice';

// Buy upgrade worker
function* onBuyUpgradeWorker({payload}) {
  const service = yield select(state => state.gameService.gameService);

  yield call(service.buyUpgrade, payload);
}

// Add item to task worker
function* onAddItemToTaskWorker({payload}) {
  const service = yield select(state => state.gameService.gameService);

  yield call(service.addItemToCurrentTask, payload);
}

// Set task active worker
function* onSetTaskActive({payload}) {
  const service = yield select(state => state.gameService.gameService);

  yield call(service.setTaskActive, payload);
}

// Start game timer worker
function* onStartGameTimer() {
  const service = yield select(state => state.gameService.gameService);

  yield call(service.startTimer);
}

// Set task progress worker
function* onSetTaskProgress({payload: {task, progress}}) {
  const service = yield select(state => state.gameService.gameService);

  yield call(service.setTaskProgress, task, progress);
}

// Game service watcher
function* gameServiceWatcher() {
  yield takeLatest(buyUpgrade.type, onBuyUpgradeWorker);
  yield takeLatest(addItemToCurrentTask.type, onAddItemToTaskWorker);
  yield takeLatest(setTaskActive.type, onSetTaskActive);
  yield takeLatest(setTaskActive.type, onSetTaskActive);
  yield takeLatest(startGameTimer.type, onStartGameTimer);
  yield takeLatest(setTaskProgress.type, onSetTaskProgress);

}

export default gameServiceWatcher;