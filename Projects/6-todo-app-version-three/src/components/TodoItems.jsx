import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={css["items-container"]}>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
