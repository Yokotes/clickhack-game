import { useSelector } from "react-redux";
import InventoryContent from "./Inventory";

export default function Inventory() {
  const items = useSelector((state) => state.inventory.items);
  
  return (
    <InventoryContent
      items={items}
    />
  )
}