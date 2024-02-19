import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={css["items-container"]}>
      {todoItems.map((item) => {
        return <TodoItem todoDate={item.dueDate} todoName={item.name} />;
      })}
    </div>
  );
};

export default TodoItems;
