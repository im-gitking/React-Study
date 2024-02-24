import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

// const TodoItems = ({ todoItems, onDeleteClick }) => {
const TodoItems = () => {
  // const todoItemsFromContext = useContext(TodoItemsContext);
  // console.log(todoItemsFromContext);

  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={css["items-container"]}>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
