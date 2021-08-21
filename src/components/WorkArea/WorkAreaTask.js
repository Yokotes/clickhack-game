import React from 'react';
import { InventoryItem } from '../Inventory';
import './WorkArea.css';

export default function WorkAreaTask({
  id,
  title,
  progress,
  activeSlots,
  reward,
  onHackClick
}) {
  const cells = new Array(10).fill([]);

  // Fill cells with items
  for (let i = 0; i < activeSlots.length; i++) {
    const item = activeSlots[i];
    
    if (i > cells.length-1) cells.push([]);
    cells[i] = (
      <InventoryItem 
        {...item}
      />
    );
  }

  return (
    <div className="WorkArea__task WorkAreaTask">
      <h2 className="WorkAreaTask__main-title WorkAreaTask__title">
        {title}
      </h2>
      <div className="WorkAreaTask__play-area">
        <div className="WorkAreaTask__play-area-content">
          <button className="WorkAreaTask__do-btn" onClick={onHackClick}>
            Click
          </button>
          <div className="WorkAreaTask__progress">
            Progress: {progress}
          </div>
        </div>
      </div>
      <div className="WorkAreaTask__active-slots">
        <h4 className="WorkAreaTask__active-slots-title WorkAreaTask__title">
          Active slots
        </h4>
        <div className="WorkAreaTask__active-slots-items">
          {
            cells.map((cell, index) => <div className="WorkAreaTask__active-slot" key={index}>{cell}</div>)
          }
        </div>
      </div>
      <div className="WorkAreaTask__reward">
          <h4 className="WorkAreaTask__reward-title WorkAreaTask__title">
            Reward
          </h4>
          <div className="WorkAreaTask__reward-content">
            <div className="WorkAreaTask__reward-money">
              Money: {reward.money}
            </div>
            <div className="WorkAreaTask__reward-items">
              <div className="WorkAreaTask__reward-items-title">
                Items:
              </div>
              <div className="WorkAreaTask__reward-items-content">
                {reward.items.map((item, index) => <div key={index}>{item}</div>)}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
