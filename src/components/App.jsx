import React, { useState } from "react";
import TodolistItem from "./Todolist";

function item() {
  const [item, itemAdd] = useState("");

  item = EventTarget.value;

  function values() {
    itemAdd();
  }
}

function App() {
  const [input, inputText] = useState("");
  const [item, itemAdd] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;
    inputText(newVal);
  }

  function button() {
    itemAdd((previtems) => {
      return [...previtems, input];
    });
    inputText("");
  }

  function deleteItem(id) {
    itemAdd((previtems) => {
      return previtems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={button}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoitem, index) => (
            <TodolistItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
