import React from "react";
import AddTodo from "./AddTodo";
import Axion from "axios";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const datahandle = (e) => {
    Axion.post(`http://localhost:8080/todos`, {
      name: e,
      id: Date.now(),
    })
      .then((res) => setTodo([...todo, res.data]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getTodo = () => {
      Axion.get(`http://localhost:8080/todos`)
        .then((res) => setTodo(res.data))
        .catch((err) => setTodo(err));
    };
    getTodo()
  }, []);

  const handleDelete = (id, e) => {
    Axion.delete(`http://localhost:8080/todos/${id}`)
    .then((res) => setTodo(todo.filter(e => e.id !== id)))
    // setTodo(todo).
  };

  return (
    <div>
      <AddTodo data={datahandle} />
      <TodoList data={todo} handleDelete={handleDelete} />
    </div>
  );
};

export default Todo;
