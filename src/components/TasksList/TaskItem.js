import React from 'react';
import './TasksList.css';

export default function TaskItem({
  id,
  title,
  description,
  img,
  progress,
  onTaskClick
}) {
  return (
    <div className='TaskItem' onClick={onTaskClick}>
      <div className="TaskItem__title">
        {title}
      </div>
      <div className="TaskItem__progress">
        Progress: {progress}
      </div>
    </div>
  )
}
