export const InputTask = ({ addTasks, onInputChange, task }) => {
  return (
    <form
      className="flex   
                 justify-evenly
                 items-center 
                 gap-1  
                 h-12
                 mb-5 
                 rounded-md 
               bg-Very-Dark-Desaturated-Blue "
      onSubmit={addTasks}
    >
      <span
        className="w-5 
                     h-5 
                     border 
                     rounded-full 
                   border-Dark-Grayish-Blue"
      ></span>
      <input
        type="text"
        className="w-[80%] 
                     text-xs 
                     bg-Very-Dark-Desaturated-Blue"
        placeholder="Create a new todo.."
        value={task}
        name="tarea"
        onChange={onInputChange}
      />
    </form>
  );
};
