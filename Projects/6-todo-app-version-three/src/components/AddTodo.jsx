import { useState } from "react";
import css from "./AddTodo.module.css";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleOnButtonClicked = () => {
    handleNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className={`row ${css["kg-row"]}`}>
        <div className="col-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Todo Here"
            onChange={handNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            value={dueDate}
            onChange={handDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${css["kg-button"]}`}
            onClick={handleOnButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
