import { useForm } from "../hooks/useForm";
import { useTaskManager } from "../hooks/useTaskManager.js";
import { RenderList } from "./RenderList.jsx";
import { FiltersTasks } from "./FiltersTasks";
import { useState, useEffect, useContext } from "react";
import { CountTasks } from "./CountTasks.jsx";
import { InputTask } from "./InputTask";
import { ThemeContext } from "../hooks/themeContext.js";

export const MainTask = () => {
  //Hooks
  const { task, formState, onInputChange } = useForm({ tarea: "" });
  const { taskState, addTasks, clearTasks, updateTasks, deleteTask } =
    useTaskManager({ formState });
  const { changeTheme, setChangeTheme } = useContext(ThemeContext);
  //Window Width
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  //Estados de Filtro
  const [filter, setFilter] = useState("all");
  // Lectura del cambio de WidthScreen
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <InputTask
        task={task}
        onInputChange={onInputChange}
        addTasks={addTasks}
        changeTheme={changeTheme}
      ></InputTask>
      <div
        className={`rounded-md 
                    ${!changeTheme
            ? "bg-white"
            : "bg-Very-Dark-Desaturated-Blue "
          }
                    shadow-2xl
                 `}
      >
        <RenderList
          object={taskState}
          filter={filter}
          updateTaskState={updateTasks}
          deleteTask={deleteTask}
          changeTheme={changeTheme}
        ></RenderList>
        <div
          className="flex 
                     justify-around 
                     items-center 
                     h-12
                     mb-5"
        >
          <CountTasks object={taskState}></CountTasks>
          {!isSmallScreen && (
            <FiltersTasks
              setFilter={setFilter}
              changeTheme={changeTheme}
            ></FiltersTasks>
          )}
          <button
            onClick={clearTasks}
            className="text-xs
                       md:text-lg
                     text-Light-Grayish-Blue 
                     hover:text-Dark-Grayish-Blue"
            type="button"
          >
            Clear Completed
          </button>
        </div>
      </div>
      {isSmallScreen && (
        <FiltersTasks
          setFilter={setFilter}
          changeTheme={changeTheme}
        ></FiltersTasks>
      )}
    </>
  );
};
