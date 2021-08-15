import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { all } from '@redux-saga/core/effects';
import tasksSlice from "./slices/tasksSlice";
import upgradesSlice from "./slices/upgradesSlice";
import inventorySlice from './slices/inventorySlice';

const rootReducer = combineReducers({
  tasks: tasksSlice,
  upgrades: upgradesSlice,
  inventory: inventorySlice,
});

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([

  ])
}

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;