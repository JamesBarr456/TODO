import { useReducer } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

const tasksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Eliminar Tarea":
    // return [...state, action.payload]
    case "[TAREAS] Borrar Tareas":
      return [];
    default:
      break;
  }
};

export const InputTask = () => {
  const { tarea, formState, onInputChange } = useForm({ tarea: "" });
  const [state, dispatch] = useReducer(tasksReducer, second);
  const addTasks = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
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
  );
};
