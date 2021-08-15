import { useSelector } from "react-redux";
import UpgradesStoreContent from "./UpgradesStore";

export default function UpgradesStore() {
  const upgrades = useSelector((state) => state.upgrades.upgrades);

  return (
    <UpgradesStoreContent
      upgrades={upgrades}
    />
  )
}