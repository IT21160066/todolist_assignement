import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/FormHeader";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState(() => {
    const initialState = localStorage.getItem("todos");
    return initialState ? JSON.parse(initialState) : [];
  });
  const [toDoEdit, setToDoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div className="container">
      <div className="box_Container">
        <div>
          <Header />
        </div>
        <div>
          <ToDoForm
            input={input}
            setInput={setInput}
            toDo={toDo}
            setToDo={setToDo}
            toDoEdit={toDoEdit}
            setToDoEdit={setToDoEdit}
          />
        </div>
        <div>
          <ToDoList toDo={toDo} setToDo={setToDo} setToDoEdit={setToDoEdit} />
        </div>
      </div>
    </div>
  );
};

export default App;
