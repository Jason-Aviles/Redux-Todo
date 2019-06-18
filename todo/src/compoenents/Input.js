import React, { Component } from "react";
import { connect } from "react-redux";
import { addMore } from "../action";

import Inputs from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import AccountCircle from "@material-ui/icons/AccountCircle";

import Button from '@material-ui/core/Button';

class Input extends Component {
  state = {
    taskInput: ""
  };

  handleChange = e => {
    this.setState({ taskInput: e.currentTarget.value });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addMore(this.state.taskInput);
  };

  render() {
    console.log(this.props.todo.todos);
    return (
      <div style={{marginTop:'5%'}}>
        <form
          onSubmit={this.addTask}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:'column'
          }}
        >
          <InputLabel htmlFor="input-with-icon-adornment">
            ADD MORE
          </InputLabel>
          <Inputs
            onChange={this.handleChange}
            value={this.state.taskInput}
            name="taskInput"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <Button style={{marginTop:"2%"}} type="submit" variant="contained" color="primary">addMore</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todo: state };
};

export default connect(
  mapStateToProps,
  { addMore }
)(Input);
