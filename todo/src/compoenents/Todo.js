import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";




  

const Todo = props => {
  
  console.log(props);
  const toggleFnc = () => {
    return props.selectTodo(props.todo.id);
  };
  const ToggleClass = props.todo.completed ? "false" : "";
  return (
    <Paper style={{marginTop:'3%', padding:'15px'}}  >
      <Typography   variant="h5" component="h3" className={ToggleClass} onClick={toggleFnc}>
        {props.todo.task}
      
      <Button style={{marginLeft:'2%' , textDecoration:'none'}}
        disabled={!props.todo.completed ? true : false}
        variant="contained"
        color="secondary"
        onClick={() => deleteFnc(props)}
      >
        delete
      </Button></Typography>
    </Paper>
  );
};

export default Todo;
function deleteFnc(props) {
  return props.todo.completed ? props.deleteTodo(props.todo.id) : "";
}
