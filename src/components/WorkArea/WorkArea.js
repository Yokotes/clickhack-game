import React from 'react';
import './WorkArea.css';
import WorkAreaTask from './WorkAreaTask';

export default function WorkAreaContent({
  task,
  money,
  onHackClick
}) {
  return (
    <div className='WorkArea'>
      <div className="WorkArea__money">
        {money}$
      </div>
      <div className="WorkArea__content">
      {
        task !== undefined ? (
          <WorkAreaTask
            {...task}
            onHackClick={onHackClick}
          />
        ) 
        : (
          <div>
            Select task
          </div>
        )
      }
      </div>
    </div>
  )
}
