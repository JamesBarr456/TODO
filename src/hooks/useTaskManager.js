import { useReducer, useEffect} from "react";
import { initialTasks } from "../hooks/dataList";
import { useLocalStorage } from "./useLocalStorage";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "[TASKS] Add_Task":
      return [...state, action.payload];
    case "[TASKS] Delete_Task":
      return state.filter((task) => task.id !== action.payload);
    case "[TASKS] Update_Task_State":
      return state.map((task) =>
        task.id === action.payload ? { ...task, finish: !task.finish } : task
      );
    case "[TASKS] Clear_Tasks":
      return state.filter((task) => !task.finish);
    default:
      break;
  }
};
export const useTaskManager = ({formState}) => {
  // Almacenamiento local para las tareas
  const localStorageKey = "tasks";
  const [data, setData] = useLocalStorage(localStorageKey, initialTasks)
  const [taskState, dispatch] = useReducer(tasksReducer, data);
  
  const addTasks = (event) => {
    event.preventDefault();
    if (formState == "") return;
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finish: false,
    };
    const action = {
      type: "[TASKS] Add_Task",
      payload: tarea,
    };
    dispatch(action);
  };
  const clearTasks = () => {
    const action = {
      type: "[TASKS] Clear_Tasks",
    };
    dispatch(action);
  };
  const updateTasks = (taskId) => {
    const action = {
      type: "[TASKS] Update_Task_State",
      payload: taskId,
    };
    dispatch(action);
  };
  const deleteTask = (taskId) => {
    const action = {
      type: "[TASKS] Delete_Task",
      payload: taskId,
    };
    dispatch(action);
  };
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(taskState));
  }, [taskState]);
  return { taskState,setData, addTasks, clearTasks, updateTasks, deleteTask }
}
