import { useDispatch, useSelector } from "react-redux";
import { setCurrentTask } from "../../slices/tasksSlice";
import TasksListContent from "./TasksList";

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const onTaskClick = (id) => {
    dispatch(setCurrentTask(id))
    console.log(id);
  };

  return (
    <TasksListContent
      tasks={tasks}
      onTaskClick={onTaskClick}
    />
  )
}