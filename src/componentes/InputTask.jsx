import { useReducer } from "react";
// import cross from "../src/assets/images/icon-cross.svg";
// import check from "../src/assets/images/icon-check.svg";
import { useForm } from "../hooks/useForm";
import { initialTasks } from "../hooks/dataList.js";
import { List } from "./List.jsx";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "[TASKS] Add_Task":
      return [...state, action.payload];
    case "[TASKS] Delete_Task":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      }
    case "[TASKS] Clear_Tasks":
      return [];
    default:
      break;
  }
};

export const InputTask = () => {
  const { tarea, formState, onInputChange } = useForm({ tarea: "" });
  const [taskState, dispatch] = useReducer(tasksReducer, initialTasks);

  const addTasks = (event) => {
    event.preventDefault();
    if (formState == "") return
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finally: false
    }
    const action = {
      type: "[TASKS] Add_Task",
      payload: tarea
    }
    dispatch(action)
    console.log(taskState)
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
        <List objets={taskState}></List>
        <div className="flex justify-around h-12 items-center">
          <p className=" text-white text-xs">5 items left</p>
          <button className=" text-white text-xs" type="button">
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
};
