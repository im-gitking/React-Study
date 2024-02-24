import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

// const todoItemsReducer = (currentTodoItems, action) => {
//   let newTodoItems = currentTodoItems;

//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currentTodoItems,
//       { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currentTodoItems.filter(
//       (todo) => todo.name !== action.payload.itemName
//     );
//   }
//   return newTodoItems;
// };

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

  // const [todoItems, setTodoItems] = useState([]);
  // const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // const addNewItem = (itemName, itemDueDate) => {
  //   // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
  //   /*const newTodoItems = [
  //     ...todoItems,
  //     {
  //       name: itemName,
  //       dueDate: itemDueDate,
  //     },
  //   ];
  //   setTodoItems(newTodoItems);*/

  //   /*setTodoItems((currentValue) => {
  //     const newTodoItems = [
  //       ...currentValue,
  //       { name: itemName, dueDate: itemDueDate },
  //     ];
  //     return newTodoItems;
  //   });*/

  //   /*setTodoItems((currentValue) => [
  //     ...currentValue,
  //     { name: itemName, dueDate: itemDueDate },
  //   ]);*/

  //   const newItemAction = {
  //     type: "NEW_ITEM",
  //     payload: {
  //       itemName,
  //       itemDueDate,
  //     },
  //   };
  //   dispatchTodoItems(newItemAction);
  // };

  // const deleteItem = (todoItemName) => {
  //   // const newTodoItems = todoItems.filter((todo) => todo.name !== todoItemName);
  //   // setTodoItems(newTodoItems);
  //   // console.log(`Item Deleted: ${todoItemName}`);

  //   const deleteItemAction = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       itemName: todoItemName,
  //     },
  //   };
  //   dispatchTodoItems(deleteItemAction);
  // };

  // const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodoItemsContextProvider>
      {/* <TodoItemsContext.Provider
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
    > */}
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
      {/* </TodoItemsContext.Provider> */}
    </TodoItemsContextProvider>
  );
}

export default App;
