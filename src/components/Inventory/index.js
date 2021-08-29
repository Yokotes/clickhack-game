import { useDispatch, useSelector } from "react-redux";
import { addItemToCurrentTask } from "../../slices/gameServiceSlice";
import InventoryContent from "./Inventory";
import InventoryItem from "./InventoryItem";

export default function Inventory() {
  const items = useSelector((state) => state.inventory.items);
  const dispatch = useDispatch();

  const onItemClick = (item) => {
    dispatch(addItemToCurrentTask(item));
  }

  return (
    <InventoryContent
      items={items}
      onItemClick={onItemClick}
    />
  )
}

export {InventoryItem};