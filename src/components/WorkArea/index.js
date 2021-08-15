import { useSelector } from "react-redux";
import WorkAreaContent from "./WorkArea";

export default function WorkArea() {
  const currentTask = useSelector((state) => state.tasks.current);

  return (
    <WorkAreaContent
      {...currentTask}
    />
  )
}