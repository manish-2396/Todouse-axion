import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data , handleDelete}) => {
  // console.log("TodoList",data)

  return (
    <div>
      <h1>Todo List</h1>
      {data.map((e) => {
        return <TodoItem name={e.name} key={e.id} id={e.id}  handleDelete={handleDelete}/>;
      })}
    </div>
  );
};

export default TodoList;
