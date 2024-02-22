import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Learn React",
  //     dueDate: "4/10/2023",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    /*const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);*/

    /*setTodoItems((currentValue) => {
      const newTodoItems = [
        ...currentValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });*/

    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItems = todoItems.filter((todo) => todo.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItem={onNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton} />
    </center>
  );
}

export default App;
