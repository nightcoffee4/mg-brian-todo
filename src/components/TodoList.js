import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //?=================[ ADD TODO ]================
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    //?=====[ NEW TODO ]=====
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    //console.log(...todos);
  };

  //?=================[ UPDATE TODO ]=====================

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //?=================[ REMOVE TODO ]=====================

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  //?=================[ COMPLATE TODO ]=====================

  const complateTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplate = !todo.isComplate;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Ne yapmamı istersin?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        complateTodo={complateTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
