import { useReducer } from "react";
import { initialTasks } from "../hooks/dataList";

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
      return [];
    default:
      break;
  }
};
export const useTaskManager = ({formState}) => {
  const [taskState, dispatch] = useReducer(tasksReducer, initialTasks);
 
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
  return { taskState, addTasks, clearTasks, updateTasks, deleteTask }
}
