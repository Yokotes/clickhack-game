import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import './App.css';
import TasksList from '../TasksList';
import WorkArea from '../WorkArea';
import UpgradesStore from '../UpgradesStore';
import Inventory from '../Inventory';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TasksList />
        <WorkArea />
        <div className="App__right-sidebar">
          <UpgradesStore />
          <Inventory />
        </div>
      </div>
    </Provider>
  )
}
