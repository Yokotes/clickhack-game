import { useDispatch, useSelector } from "react-redux";
import { setTaskActive, setTaskProgress } from "../../slices/gameServiceSlice";
import WorkAreaContent from "./WorkArea";

export default function WorkArea() {
  const currentTaskId = useSelector((state) => state.tasks.current);
  const tasks = useSelector((state) => state.tasks.tasks);
  const money = useSelector((state) => state.game.money);
  const currentTask = tasks.filter(task => task.id === currentTaskId)[0];
  const vars = useSelector((state) => state.game.vars);
  const dispatch = useDispatch();

  const onHackClick = (task) => {
    dispatch(setTaskProgress({
      task,
      progress: vars.click
    }));
    dispatch(setTaskActive(task));
  }

  return (
    <WorkAreaContent
      task={currentTask}
      money={money}
      onHackClick={onHackClick}
    />
  )
}