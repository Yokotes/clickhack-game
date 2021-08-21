import { useSelector } from "react-redux";
import InventoryContent from "./Inventory";
import InventoryItem from "./InventoryItem";

export default function Inventory() {
  const items = useSelector((state) => state.inventory.items);
  
  return (
    <InventoryContent
      items={items}
    />
  )
}

export {InventoryItem};