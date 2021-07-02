import React, { useEffect, useState } from "react";

import "./App.css";
import Tabs from "./comonents/Tabs/Tabs";
import TodoInputForm from "./comonents/NewTodo/TodoInputForm";
import TodoList from "./comonents/TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use effect
  //Run once use effect
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let localTodos = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodos);
      }
    };
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;

        default:
          setFilteredTodos(todos);
          break;
      }
    };
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="heading--1">#todo</h1>
      </header>
      <main className="main">
        <Tabs status={status} setStatus={setStatus} />
        <TodoInputForm
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          status={status}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          status={status}
        />
      </main>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
    </div>
  );
}

export default App;
