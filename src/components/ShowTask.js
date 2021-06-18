import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

class ShowTask extends Component {
  delelteTask = (task) => {
    this.props.t_delete(task);
  };
  render() {
    const { task } = this.props;

    return (
      <div className="show-task ">
        <Row>
          <Col sm={7} md={8} xs={7} xl={10} lg={8} className="mt-3">
            <h2 style={{ fontSize: "25px" }}>{task.title}</h2>
          </Col>
          <Col sm={2} md={2} xs={2} xl={1} lg={2} className="mt-4">
            <FaTrash
              onClick={() => this.delelteTask(task.id)}
              // onClick={() => this.delelteTask(task)}
            />
          </Col>
          <Col sm={3} md={2} xs={1} xl={1} lg={2} className="mt-4">
            <FaEdit onClick={() => this.props.update(task)} />
          </Col>
        </Row>

        <hr className="new" />

        <Row>
          <Col>
            <p style={{ color: "gray" }}>{task.description}</p>
          </Col>
        </Row>
        {/* <button onClick={() => this.props.update(task)}>Edit</button> */}
      </div>
    );
  }
}

export default ShowTask;
