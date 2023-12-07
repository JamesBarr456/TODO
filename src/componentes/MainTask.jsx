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
  const [showCompleted, setShowCompleted] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [showAll, setShowAll] = useState(true);

  //Funciones de Filtros (Mejorar esto si o si es una verguenza XD)
  const activeTasks = () => {
    if (showActive === true) return;
    setShowActive(!showActive);
    setShowAll(false);
    setShowCompleted(false);
  };

  // Almacenamiento local para las tareas
  const localStorageKey = "tasks";

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


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize(); // Set initial screen size
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
          showActive={showActive}
          showCompleted={showCompleted}
          objets={taskState}
          updateTaskState={updateTasks}
          deleteTask={deleteTask}
          changeTheme={changeTheme}
        ></RenderList>
        <div
          className="flex 
                     justify-around 
                     items-center 
                     h-12"
        >
          <CountTasks object={taskState}></CountTasks>
          {!isSmallScreen && (
            <FiltersTasks
              activeTasks={activeTasks}
              completedTasks={completedTasks}
              allTasks={allTasks}
              changeTheme={changeTheme}
            ></FiltersTasks>
          )}
          <button
            onClick={clearTasks}
            className="text-xs 
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
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          allTasks={allTasks}
          changeTheme={changeTheme}
        ></FiltersTasks>
      )}
    </>
  );
};
