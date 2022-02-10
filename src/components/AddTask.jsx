import { useState } from "react";
import { Button } from "react-bootstrap";
import useActions from "../hooks/useActions";

const AddTask = () => {
  const { addHandler } = useActions();
  const [task, setTask] = useState({
    id: undefined,
    toDoText: "",
    toDoActive: true
  });
  const handlerInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => addHandler(e,task)}>
      <input type="text" name="toDoText" onChange={(e)=>handlerInputChange(e)} className="w-100 mt-3 mb-3" required/>
      <Button type="submit" variant="info" className="text-white">
        Add Task
      </Button>
    </form>
  );
};

export default AddTask;
