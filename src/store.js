import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { all } from '@redux-saga/core/effects';
import tasksSlice from "./slices/tasksSlice";
import upgradesSlice from "./slices/upgradesSlice";
import inventorySlice from './slices/inventorySlice';
import gameSlice from "./slices/gameSlice";
import gameServiceSlice from "./slices/gameServiceSlice";
import gameServiceWatcher from "./sagas/gameServiceSaga";

const rootReducer = combineReducers({
  tasks: tasksSlice,
  upgrades: upgradesSlice,
  inventory: inventorySlice,
  game: gameSlice,
  gameService: gameServiceSlice,
});

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    gameServiceWatcher(),
  ])
}

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;