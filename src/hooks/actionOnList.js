export const addTasks = (event) => {
  event.preventDefault();
  if (formState == "") return;
  const tarea = {
    id: new Date().getTime(),
    tarea: formState.tarea,
    finally: false,
  };
  const action = {
    type: "[TASKS] Add_Task",
    payload: tarea,
  };
  dispatch(action);
  console.log(taskState);
};

export const clearTasks = () => {
  const action = {
    type: "[TASKS] Clear_Tasks",
  };
  dispatch(action);
};
export const updateTaskState = (taskId) => {
  const action = {
    type: "[TASKS] Update_Task_State",
    payload: taskId,
  };
  dispatch(action);
};
export const deleteTask = (taskId) => {
  const action = {
    type: "[TASKS] Delete_Task",
    payload: taskId,
  };
  dispatch(action);
};
