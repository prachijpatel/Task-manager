import React, { Component } from "react";
import Task from "./Task";
import { Col } from "react-bootstrap";
import { FaCross, FaTimes } from "react-icons/fa";

class Tasks extends Component {
  render() {
    const { tasks, show, t_delete } = this.props;

    if (tasks.length > 0) {
      return tasks.map((task) => (
        // <Col>
        <Task key={task.id} task={task} show={show} t_delete={t_delete} />

        // </Col>
      ));
    } else {
      return <Col className="no-task">No tasks</Col>;
    }
  }
}

export default Tasks;
