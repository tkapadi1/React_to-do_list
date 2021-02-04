import React from "react";

function TodolistItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li> {props.text} </li>;
    </div>
  );
}

export default TodolistItem;
