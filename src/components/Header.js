import React, { Component } from "react";
import Button from "./Button";
import Tasks from "./Tasks";
import { FaPlus } from "react-icons/fa";
import AddTask from "./AddTask";
import { Row, Col } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Row className="task-header ">
        <Col sm={10} md={9} xs={9} xl={10} lg={10}>
          <h2 className="task-title">Task Manager</h2>
        </Col>
        <Col sm={2} md={3} xs={3} xl={2} lg={2}>
          <FaPlus onClick={this.props.onDis} />
          {/* </header> */}
        </Col>
      </Row>
    );
  }
}

export default Header;
