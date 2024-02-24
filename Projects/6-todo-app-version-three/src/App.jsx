import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

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

  const addNewItem = (itemName, itemDueDate) => {
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

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((todo) => todo.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  // const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodoItemsContext.Provider
      // value={{
      //   todoItems: todoItems,
      //   addNewItem: addNewItem,
      //   deleteItem: deleteItem,
      // }}
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        {/* <AddTodo handleNewItem={addNewItem} /> */}
        <AddTodo />
        {/* {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>} */}
        <WelcomeMessage></WelcomeMessage>
        {/* <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton} /> */}
        {/* <TodoItems onDeleteClick={handleDeleteButton} /> */}
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
