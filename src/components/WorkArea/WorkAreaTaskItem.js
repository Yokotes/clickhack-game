import React from 'react';
import './WorkArea.css';

export default function WorkAreaTaskItem({
  id,
  img,
  title,
  description,
  onItemClick
}) {
  return (
    <div className='WorkAreaTaskItem'
      title={description}
      onClick={onItemClick}
    >
      <div className="WorkAreaTaskItem">
        {title}
      </div>
    </div>
  )
}
