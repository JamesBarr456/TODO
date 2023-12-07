export const InputTask = ({ addTasks, onInputChange, task, changeTheme }) => {
  return (
    <form
      className={`flex   
                 justify-evenly
                 items-center 
                 gap-1  
                 h-12
                 mb-5 
                 rounded-md 
                 ${!changeTheme ? 'bg-white' : 'bg-Very-Dark-Desaturated-Blue'}
                `}
      onSubmit={addTasks}
    >
      <span
        className="w-5 
                     h-5 
                     border 
                     rounded-full 
                     border-Light-Grayish-Blue"
      ></span>
      <input
        type="text"
        className={`w-[80%] 
                     text-xs 
                     ${!changeTheme ? 'bg-white text-Dark-Grayish-Blue' : 'bg-Very-Dark-Desaturated-Blue text-white'}
                     focus:border-transparent
                     focus:outline-none`}
        placeholder="Create a new todo.."
        value={task}
        name="tarea"
        onChange={onInputChange}
      />
    </form>
  );
};
