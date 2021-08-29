import React from 'react';
import './UpgradesStore.css';
import Upgrade from './Upgrade';

export default function UpgradesStoreContent({
  upgrades,
  onBuyClick,
}) {
  return (
    <div className='UpgradesStore'>
      <div className="UpgradesStore__title">
        Upgrades
      </div>
      <div className="UpgradesStore__items">
        {
          upgrades.map(upgrade => (
            <Upgrade
              key={upgrade.id}
              onBuyClick={() => onBuyClick(upgrade)}
              {...upgrade}
            />
          ))
        }
      </div>
    </div>
  )
}
