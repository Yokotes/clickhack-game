import React from 'react';
import './UpgradesStore.css';

export default function Upgrade({
  id,
  img,
  title,
  description,
  onBuyClick,
  cost
}) {
  return (
    <div className='Upgrade' onClick={onBuyClick} title={description}>
      {title} ({cost})
    </div>
  )
}
