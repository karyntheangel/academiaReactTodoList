import { Todo_provider } from "./context/Todo_context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Todo_provider>
      <section className="app">
        <Card style={{ width: "75%" }} className='customCard'>
          <Card.Body>
            <Card.Title>To do List</Card.Title>
            <Card.Subtitle className="mb-4 mt-4 text-muted ">
              <div>Add a new thing to do</div>
              <div>
                <AddTask />
              </div>
            </Card.Subtitle>
              <TaskList/>
          </Card.Body>
        </Card>
      </section>
    </Todo_provider>
  );
}

export default App;
