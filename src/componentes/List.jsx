export const List = ({objets}) => {
    return (
        <ul>
          {objets.map( task => (
            <li id={task.id} className="flex items-center justify-evenly h-12 border-b border-Dark-Grayish-Blue">
            <span
              type="checkbox"
              className="flex  items-center justify-center w-5 h-5 border rounded-full border-Dark-Grayish-Blue "
            >
              {/* <img src={check} alt="check" className="hidden" /> */}
            </span>
            <p className="text-white w-[70%] text-xs">
             {task.tarea}
            </p>
            <button type="button">
              {/* <img src={cross} alt="cross" /> */}
            </button>
          </li>
          ))}
        </ul>
    )
}