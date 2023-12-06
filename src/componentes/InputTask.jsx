
import { useForm } from "../hooks/useForm";
import { useTaskManager } from "../hooks/useTaskManager.js";
import { RenderList } from "./RenderList.jsx";
import { FiltersTasks } from "./FiltersTasks";
import { useState } from "react";
import { CountTasks } from "./CountTasks.jsx";



export const InputTask = () => {
  //Hooks
  const { tarea, formState, onInputChange } = useForm({ tarea: "" });
  const { taskState, addTasks, clearTasks, updateTasks, deleteTask } = useTaskManager({formState});

 
  const [showCompleted, setShowCompleted] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [showAll, setShowAll] = useState(true);

 
  const activeTasks = () => {
    if (showActive === true) return;
    setShowActive(!showActive);
    setShowAll(false);
    setShowCompleted(false);
  };
  const completedTasks = () => {
    if (showCompleted === true) return;
    setShowCompleted(!showCompleted);
    setShowActive(false);
    setShowAll(false);
  };
  const allTasks = () => {
    if (showAll === true) return;
    setShowAll(!showAll);
    setShowCompleted(false);
    setShowActive(false);
  };
  return (
    <>
      <form
        className="flex gap-1 items-center justify-evenly h-12 rounded-md bg-Very-Dark-Desaturated-Blue mb-5 "
        onSubmit={addTasks}
      >
        <span
          className="
          w-5 
          h-5 
          border 
          rounded-full 
          border-Dark-Grayish-Blue">
        </span>
        <input
          type="text"
          className="bg-Very-Dark-Desaturated-Blue w-[80%] text-xs"
          placeholder="Create a new todo.."
          value={tarea}
          name="tarea"
          onChange={onInputChange}
        />
      </form>
      <div className="bg-Very-Dark-Desaturated-Blue rounded-md">
        <RenderList
          showActive={showActive}
          showCompleted={showCompleted}
          objets={taskState}
          updateTaskState={updateTasks}
          deleteTask={deleteTask}
        ></RenderList>
        <div className="flex justify-around h-12 items-center">
          <CountTasks object={taskState}></CountTasks>
          <button
            onClick={clearTasks}
            className=" text-Dark-Grayish-Blue text-xs"
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
