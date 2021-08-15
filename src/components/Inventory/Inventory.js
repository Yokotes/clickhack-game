import React from 'react';
import './Inventory.css';
import InventoryItem from './InventoryItem';

export default function InventoryContent({
  items
}) {
  const cells = new Array(10).fill([]);

  // Fill cells with items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    
    if (i > cells.length-1) cells.push([]);
    cells[i] = (
      <InventoryItem 
        {...item}
      />
    );
  }

  return (
    <div className='Inventory'>
      <div className="Inventory__title">
        Inventory
      </div>
      <div className="Inventory__items">
        {
          cells.map((cell, id) => (
            <div className="Inventory__cell" key={id}>
              {cell}
            </div>
          ))
        }
      </div>
    </div>
  )
}
