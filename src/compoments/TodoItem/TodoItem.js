import React from "react";
import "./TodoItem.scss";

export default function TodoItem(props) {
  // console.log(props);
  const todo = props.TodoProps;
  const handleChecked = props.checkedFunc;
  const handleDelete = props.deleteFunc;
  return (
    <div className="wrapper">
      <input
        className="input-checkbox"
        type="checkbox"
        checked={props.TodoProps.completed}
        onChange={handleChecked.bind(this, todo.id)}
      />
      <p
        className="content"
        style={
          props.TodoProps.completed ? { textDecoration: "line-through" } : {}
        }
      >
        {todo.title}
      </p>
      <button className="delete-btn" onClick={handleDelete.bind(this, todo.id)}>
        Delete
      </button>
    </div>
  );
}
