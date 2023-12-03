import { useReducer } from "react";
import { useForm } from "../hooks/useForm";
import { initialTasks } from "../hooks/dataList.js";
import { RenderList } from "./RenderList.jsx";
import { FiltersTasks } from "./FiltersTasks";
import { useState } from "react";

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

export const InputTask = () => {
  const { tarea, formState, onInputChange } = useForm({ tarea: "" });
  const [taskState, dispatch] = useReducer(tasksReducer, initialTasks);
  const [showActive, setShowActive] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAll, setShowAll] = useState(true);

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
    console.log(taskState);
  };

  const clearTasks = () => {
    const action = {
      type: "[TASKS] Clear_Tasks",
    };
    dispatch(action);
  };
  const updateTaskState = (taskId) => {
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

  const activeTasks = () => {
    setShowActive(!showActive);
    setShowAll(false);
    setShowCompleted(false);
  };
  const completedTasks = () => {
    setShowCompleted(!showCompleted);
    setShowActive(false);
    setShowAll(false);
  };
  const allTasks = () => {
    if (setShowAll === true) return;
    setShowAll(!showAll);
    setShowCompleted(false);
    setShowActive(false);
  };

  return (
    <>
      <form
        className="flex gap-1 items-center justify-evenly h-12 rounded-md bg-Very-Dark-Grayish-Blue mb-5 "
        onSubmit={addTasks}
      >
        <span className="w-5 h-5 border rounded-full border-Dark-Grayish-Blue"></span>
        <input
          type="text"
          className="bg-Very-Dark-Grayish-Blue w-[80%] text-xs"
          placeholder="Create a new todo.."
          value={tarea}
          name="tarea"
          onChange={onInputChange}
        />
      </form>
      <div className="bg-Very-Dark-Grayish-Blue rounded-md">
        <RenderList
          showActive={showActive}
          showCompleted={showCompleted}
          objets={taskState}
          updateTaskState={updateTaskState}
          deleteTask={deleteTask}
        ></RenderList>
        <div className="flex justify-around h-12 items-center">
          <p className=" text-white text-xs">5 items left</p>
          <button
            onClick={clearTasks}
            className=" text-white text-xs"
            type="button"
          >
            Clear Completed
          </button>
        </div>
      </div>
      <FiltersTasks
        activeTasks={activeTasks}
        completedTasks={completedTasks}
        allTasks={allTasks}
      ></FiltersTasks>
    </>
  );
};
