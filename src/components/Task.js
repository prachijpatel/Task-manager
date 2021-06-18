import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTask: false,
    };
  }
  individualTask = (task) => {
    this.props.show(task);
    // console.log(task);
  };

  render() {
    // const { title, description, time } = this.state;
    const { task, t_delete } = this.props;
    const { showTask } = this.state;
    return (
      // <React.Fragment>
      <Row className="task m-1.5">
        <Col
          sm={10}
          md={9}
          xs={9}
          xl={10}
          lg={10}
          onClick={() => this.individualTask(task)}
        >
          <h3 className="task-text">{task.title}</h3>
        </Col>
        <Col sm={2} md={3} xs={3} xl={2} lg={2}>
          <FaTimes className="close_btn" onClick={() => t_delete(task.id)} />
        </Col>
      </Row>
    );
  }
}

export default Task;
