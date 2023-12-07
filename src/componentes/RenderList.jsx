import cross from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";
import { useContext } from "react";
useContext;
export const RenderList = ({
  showActive,
  showCompleted,
  objets,
  updateTaskState,
  deleteTask,
  changeTheme,
}) => {
  
  const tasksRender = () => {
    if (showActive) {
      return objets.filter((task) => !task.finish);
    } else if (showCompleted) {
      return objets.filter((task) => task.finish);
    } else {
      return objets;
    }
  };

  return (
    <>
      <ul>
        {tasksRender().map((task) => (
          <li
            key={task.id}
            className="flex 
                     items-center 
                     justify-evenly 
                     h-12 
                     border-b 
                   border-Light-Grayish-Blue"
            onMouseEnter={(e) => e.currentTarget.querySelector('.cross-button').classList.remove('opacity-0')}
            onMouseLeave={(e) => e.currentTarget.querySelector('.cross-button').classList.add('opacity-0')}
          >
            <span
              onClick={() => updateTaskState(task.id)}
              type="checkbox"
              className={`flex 
                           items-center 
                           justify-center 
                           w-5 
                           h-5 
                           border 
                           rounded-full
                           border-Light-Grayish-Blue
                           hover:border-Check-Background1
                           ${task.finish ? "bg-gradient-to-b from-Check-Background1 to-Check-Background2"
                                         : "" }`}
            >
              <img
                src={check}
                alt="check"
                className={`${!task.finish ? "hidden" : "task.finish"}`}
              />
            </span>
            <p
              className={`w-[70%] 
                          text-xs
                          ${!changeTheme ? ' text-Dark-Grayish-Blue' 
                                         : ' text-white'}
                          ${task.finish  ? "line-through text-Light-Grayish-Blue "
                                         : null}`}
            >
              {task.tarea}
            </p>
            <button 
              type="button" 
              className="opacity-0 cross-button"
              onClick={() => deleteTask(task.id)}>
              <img src={cross} alt="cross" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
