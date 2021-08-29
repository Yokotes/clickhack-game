import React from 'react';
import './Inventory.css';

export default function InventoryItem({
  id,
  img,
  title,
  description,
  count,
  onItemClick
}) {
  return (
    <div className='InventoryItem'
      title={description}
      onClick={onItemClick}
      draggable
    >
      <div className="InventoryItem__title">
        {title}
      </div>
      <div className="InventoryItem__count">
        ({count})
      </div>
    </div>
  )
}
