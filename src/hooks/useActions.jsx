import { useContext } from "react";
import { Todo_context } from "../context/Todo_context";

const useActions = () => {
  const { data, setData } = useContext(Todo_context);

  const deleteHandler = (id) => {
    const finalList = data.filter((task) => task.id != id);
    setData(finalList);
  };
  const changeStatusHandler = (id) => {
    let taskToChange = data.find((task) => task.id === id);
    taskToChange.toDoActive = !taskToChange.toDoActive;
    setData([...data]);
  };
  const addHandler = (newTask) => {
    newTask.id = data.slice(-1)[0].id + 1;
    newTask.toDoActive = true;
    setData([...data, newTask]);
  };
  return {
    data,
    deleteHandler,
    changeStatusHandler,
    addHandler,
  };
};

export default useActions;
