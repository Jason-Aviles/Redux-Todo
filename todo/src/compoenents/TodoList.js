import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTodo, deleteTodo } from "../action";

import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.todoslist.todos.map((todo, i) => {
            return (
              <Todo
                key={i}
                todo={todo}
                selectTodo={this.props.selectTodo}
                deleteTodo={this.props.deleteTodo}
              />
            );
          })}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todoslist: state };
};

export default connect(
  mapStateToProps,
  { selectTodo, deleteTodo }
)(TodoList);
