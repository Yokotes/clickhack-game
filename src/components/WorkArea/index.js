import { useDispatch, useSelector } from "react-redux";
import { increaseMoney } from "../../slices/gameSlice";
import { clearTaskProgress, increaseTaskProgress } from "../../slices/tasksSlice";
import WorkAreaContent from "./WorkArea";

export default function WorkArea() {
  const currentTaskId = useSelector((state) => state.tasks.current);
  const tasks = useSelector((state) => state.tasks.tasks);
  const money = useSelector((state) => state.game.money);
  const currentTask = tasks.filter(task => task.id === currentTaskId)[0];
  const dispatch = useDispatch();

  const onHackClick = () => {
    dispatch(increaseTaskProgress({
      id: currentTaskId,
      progress: 10,
    }));

    if (currentTask.progress === 90) {
      dispatch(clearTaskProgress(currentTaskId));
      dispatch(increaseMoney(currentTask.reward.money));
    }
  }

  return (
    <WorkAreaContent
      task={currentTask}
      money={money}
      onHackClick={onHackClick}
    />
  )
}