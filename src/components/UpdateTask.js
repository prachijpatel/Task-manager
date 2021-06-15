import React, { Component } from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import { Form, Button } from "react-bootstrap";

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      description: "",
    };
  }
  onSubmit = (e) => {
    const { id, title, description } = this.state;
    if (!title) {
      alert("Please enter Title");
      return;
    }
    e.preventDefault();
    this.props.update({ id, title, description });
    this.setState({
      title: "",
      description: "",
    });

    console.log("onSubmit");
  };
  componentWillMount() {
    console.log("cuurrr", this.props.curr_task);
    if (this.props.curr_task) {
      this.setState({
        id: this.props.curr_task.id,
        title: this.props.curr_task.title,
        description: this.props.curr_task.description,
      });
    } else {
      this.setState({
        title: "",
        description: "",
      });
    }
  }
  handlerTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handlerDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { curr_task } = this.props;
    // console.log(curr_task.title);

    const { title, description } = this.state;

    return (
      <form className="mt-4" onSubmit={this.onSubmit}>
        <div>
          <TextField
            label="Title"
            multiline
            rowsMax={1}
            fullWidth
            value={title}
            onChange={this.handlerTitleChange}
          />
        </div>
        <div className="mt-2">
          <TextField
            label="Description"
            multiline
            rowsMax={17}
            fullWidth
            value={description}
            onChange={this.handlerDescriptionChange}
          />
        </div>
        <input type="submit" value="Edit" className="btn btn-info mt-4" />
      </form>
    );
  }
}

export default AddTask;
