import React from "react";

const TodoItem = ({ name , id , handleDelete}) => {
  // console.log("Item", id);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={(e) =>handleDelete(id , e)} >Delete</button>
    </div>
  );
};

export default TodoItem;
