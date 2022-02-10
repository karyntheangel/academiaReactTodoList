import { useContext } from "react";
import { Todo_context } from "../context/Todo_context";
import { ListGroup } from "react-bootstrap";
import Task from "./Task";

const TaskList = () => {
  const { data } = useContext(Todo_context);
  return (
    <div>
      {data.map((task) => (
        <ListGroup.Item
          key={task.id}
          className="d-flex justify-content-between"
        >
          <p className={task.toDoActive ? "font-weight-bold" : "text-Line"}>
            {" "}
            {task.toDoText}{" "}
          </p>
          <div className="d-flex justify-content-end">
            <Task idTask={task.id} activeTask={task.toDoActive} />
          </div>
        </ListGroup.Item>
      ))}
    </div>
  );
};

export default TaskList;
