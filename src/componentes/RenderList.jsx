import cross from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";
export const RenderList = ({ objets, updateTaskState }) => {

  const handleSpanClick = (taskId) => {
    updateTaskState(taskId);
  };
  return (
    <ul>
      {objets.map(task => (
        <li
          key={task.id}
          className="flex 
                     items-center 
                     justify-evenly 
                     h-12 
                     border-b 
                   border-Dark-Grayish-Blue">
          <span
            onClick={() => handleSpanClick(task.id)}
            type="checkbox"
            className={`flex 
                           items-center 
                           justify-center 
                           w-5 
                           h-5 
                           border 
                           rounded-full
                         border-Dark-Grayish-Blue 
                           ${task.finish ? "bg-gradient-to-b from-Check-Background1 to-Check-Background2" : ""}`}
          >
            <img
              src={check}
              alt="check"
              className={`${!task.finish ? "hidden" : ""}`} />
          </span>
          <p
            className="text-white 
                          w-[70%] 
                          text-xs">
            {task.tarea}
          </p>
          <button
            type="button">
            <img
              src={cross}
              alt="cross" />
          </button>
        </li>
      ))}
    </ul>
  )
}