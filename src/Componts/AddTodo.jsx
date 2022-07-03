import React, { useState } from "react";
import "../Style/Add.module.css";

const AddTodo = ({ data }) => {
  const [text, setText] = useState("");

  return (
    <div className="addTodo">
      <h1>Todo</h1>
      <input
        className="input"
        type="text"
        placeholder="Write Something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => data(text)}>+</button>
    </div>
  );
};

export default AddTodo;
