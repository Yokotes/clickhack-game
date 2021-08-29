import React, { useEffect } from 'react';
import './App.css';
import TasksList from '../TasksList';
import WorkArea from '../WorkArea';
import UpgradesStore from '../UpgradesStore';
import Inventory from '../Inventory';
import { useDispatch } from 'react-redux';
import { startGameTimer } from '../../slices/gameServiceSlice';

export default function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGameTimer());
  }, [dispatch]);

  return (
      <div className='App'>
        <TasksList />
        <WorkArea />
        <div className="App__right-sidebar">
          <UpgradesStore />
          <Inventory />
        </div>
      </div>
  )
}
