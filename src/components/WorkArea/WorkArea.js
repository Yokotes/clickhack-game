import React from 'react';
import './WorkArea.css';

export default function WorkAreaContent({
  id,
  title,
  description,
  img,
  progress
}) {
  return (
    <div className='WorkArea'>
      {
        id !== undefined ? (
          <div className="WorkArea__content">
            {title}
          </div>
        ) : (
          <div>
            Select task
          </div>
        )
      }
    </div>
  )
}
