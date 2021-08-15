import React from 'react';
import './TasksList.css';
import TaskItem from './TaskItem';

export default function TasksListContent({
  tasks,
  onTaskClick
}) {
  return (
    <div className='TasksList'>
      {
        tasks.map(task => (
          <TaskItem
            {...task}
            key={task.id}
            onTaskClick={() => onTaskClick(task.id)}
          />
        ))
      }
    </div>
  )
}
