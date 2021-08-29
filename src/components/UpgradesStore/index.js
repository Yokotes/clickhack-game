import { useDispatch, useSelector } from "react-redux";
import { buyUpgrade } from "../../slices/gameServiceSlice";
import UpgradesStoreContent from "./UpgradesStore";

export default function UpgradesStore() {
  const upgrades = useSelector((state) => state.upgrades.upgrades);
  const dispatch = useDispatch();

  const onBuyClick = (upgrade) => {
    dispatch(buyUpgrade(upgrade));
  }

  return (
    <UpgradesStoreContent
      upgrades={upgrades}
      onBuyClick={onBuyClick}
    />
  )
}