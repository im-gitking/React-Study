import { useState, useRef } from "react";
import css from "./AddTodo.module.css";
import { CgAddR } from "react-icons/cg";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

// function AddTodo({ handleNewItem }) {
function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const noOfUpdates = useRef(0);

  // const handNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are: ${noOfUpdates.current}`);
  // };

  const handleOnButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    // handleNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");

    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;

    // console.log(`${todoName} due on: ${dueDate}`);
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className="container">
      <form className={`row ${css["kg-row"]}`} onSubmit={handleOnButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            name=""
            id=""
            placeholder="Enter Todo Here"
            // onChange={handNameChange}
            // value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            name=""
            id=""
            // value={dueDate}
            // onChange={handDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success ${css["kg-button"]}`}
          >
            <CgAddR />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
