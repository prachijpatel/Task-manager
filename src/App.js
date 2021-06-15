import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import React, { useState, useEffect } from "react";
import ShowTask from "./components/ShowTask";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateTask from "./components/UpdateTask";
import { withWidth } from "@material-ui/core";
// import { Container } from "@material-ui/core";

function App() {
  const [display, setDisplay] = useState(true);
  const [showTask, setShowTask] = useState(false);
  const [currTask, setCurrTask] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   title: "wake up",
    //   description: "in morning",
    //   // time: "monday"
    // },
    // {
    //   id: 2,
    //   title: "eat breakfast",
    //   description: "in morning",
    //   // time: "tuesday",
    // },
  ]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // fetch all data from json-server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5001/tasks");
    const data = await res.json();
    console.log("fetch", data);
    return data;
  };

  // fetch the task of perticular id
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "PUT",
    });
    const data = await res.json();
    console.log("fetch", data);
    return data;
  };

  const onDisplay = () => {
    console.log("display");
    setDisplay(true);
    setShowTask(false);
    setCurrTask(null, console.log("dis-curr", currTask));
  };
  const onAddTask = async (task) => {
    const res = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // console.log("id", task);
    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    // console.log("id in if", newTask.id);
  };

  const onUpAdd = async (task) => {
    const taskToupdate = await fetchTask(task.id);
    const updatedTask = {
      ...taskToupdate,
      title: task.title,
      description: task.description,
    };
    const res = await fetch(`http://localhost:5001/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    // using only react
    setTasks(
      tasks.map((x) =>
        x.id === task.id
          ? { ...x, title: data.title, description: data.description }
          : x
      )
    );
  };
  const showTaskind = (task) => {
    setCurrTask(task);
    setDisplay(false);
    setShowTask(true);
    console.log("show", task);
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "DELETE",
    });
    console.log("Delete", id);

    setTasks((tasks) => tasks.filter((x) => x.id != id));
    setShowTask(false);
    setDisplay(true);
    setCurrTask(null);
    // return tasks;
  };
  const onUpdate = (task) => {
    setShowTask((task) => !task);
    setDisplay(false);
    setCurrTask(task);
    setUpdate(true);
    console.log("Update");
  };

  return (
    <Container>
      {/* <div className="container"> */}
      {/* <div className="container-left"> */}
      <Row>
        <Col sm={4} md={4} xl={4} xs lg={6}>
          <Header onDis={onDisplay} />

          <hr className="new" />
          <div style={myStyle}>
            <Tasks tasks={tasks} show={showTaskind} t_delete={onDelete} />
          </div>
          {/* </div> */}
        </Col>
        {showTask ? (
          <Col sm={8} md={8} xl={8} xs lg={6}>
            <ShowTask update={onUpdate} task={currTask} t_delete={onDelete} />
          </Col>
        ) : display ? (
          <Col sm={8} md={8} xl={8} xs lg={6}>
            <AddTask onAdd={onAddTask} curr_task={currTask} />
          </Col>
        ) : (
          <Col sm={8} md={8} xl={8} xs lg={6}>
            <UpdateTask
              update={onUpAdd}
              curr_task={currTask}
              onAdd={onAddTask}
            />
          </Col>
        )}

        {/* {showTask && !display ? (
          <Col sm={8} md={8} xl={8} xs lg>
            <ShowTask update={onUpdate} task={currTask} t_delete={onDelete} />
          </Col>
        ) : (
          <Col sm={8} md={8} xl={8} xs lg>
            <AddTask onAdd={onAddTask} curr_task={currTask} />
          </Col>
        )} */}
        {/* {updateTask && !showTask && !display ? (
          <Col sm={8} md={8} xl={8} xs lg>
            <UpdateTask update={onUpdate} curr_task={currTask} />
          </Col>
        ) : (
          ""
        )} */}
        {/* </div> */}
      </Row>
    </Container>
  );
}

const myStyle = {
  overflowX: "hidden",
  overflowY: "scroll",
  maxHeight: "470px",
  // width: "100vw",
};

export default App;
