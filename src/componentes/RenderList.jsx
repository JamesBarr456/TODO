import cross from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";

export const RenderList = ({
  showActive,
  showCompleted,
  objets,
  updateTaskState,
  deleteTask,
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
                   border-Dark-Grayish-Blue"
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
                         border-Dark-Grayish-Blue 
                           ${
                             task.finish
                               ? "bg-gradient-to-b from-Check-Background1 to-Check-Background2"
                               : ""
                           }`}
            >
              <img
                src={check}
                alt="check"
                className={`${!task.finish ? "hidden" : ""}`}
              />
            </span>
            <p
              className="text-white 
                          w-[70%] 
                          text-xs"
            >
              {task.tarea}
            </p>
            <button type="button" onClick={() => deleteTask(task.id)}>
              <img src={cross} alt="cross" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
