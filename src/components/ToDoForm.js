import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, toDo, setToDo, toDoEdit, setToDoEdit }) => {
  const updateToDo = (title, id, completed) => {
    const newToDoItem = toDo.map((item) =>
      item.id === id ? { title, id, completed } : item
    );
    setToDo(newToDoItem);
    setToDoEdit("");
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toDoEdit) {
      setToDo([...toDo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateToDo(input, toDoEdit.id, toDoEdit.completed);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Item..."
        className="item_Input"
        value={input}
        required
        onChange={handleChange}
      />
      <button className="plus_Button" type="submit">
        +
      </button>
    </form>
  );
};

export default Form;
