import React from "react";

const ToDoList = ({ toDo, setToDo, setToDoEdit }) => {
  const handlecomplete = (item) => {
    setToDo(
      toDo.map((listItem) => {
        if (listItem.id === item.id)
          return { ...item, completed: !item.completed };

        return listItem;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findItem = toDo.find((item) => item.id === id);
    //check if the task is completed before editing
    if (!findItem.completed) setToDoEdit(findItem);
  };

  const handleDelete = ({ id }) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  return (
    <div>
      {toDo.map((item) => (
        <li className="list_Item" key={item.id}>
          <input
            type="text"
            value={item.title}
            className={`list ${item.completed ? "complete" : ""}`}
            //disable input field for completed task
            disabled={item.completed}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="complete_Btn tsk-button"
              onClick={() => handlecomplete(item)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="edit_Btn tsk-button"
              onClick={() => handleEdit(item)}
              //disable edit button for completed task
              disabled={item.completed}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="delete_Btn tsk-button"
              onClick={() => handleDelete(item)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
