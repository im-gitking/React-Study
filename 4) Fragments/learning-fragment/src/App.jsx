// import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

  //1) If-else Method
  if (foodItems.length === 0) {
    return <h3>I'm still hungry.</h3>;
  }

  // let emptyMessage = foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {/*//2) Ternary Operator Method- 1
       {foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null} 
      */}

      {/*//2) Ternary Operator Method -2
      {emptyMessage} 
      */}

      {/* //3) Logical Operator Method -->
        - if 1st condition is correct then will move to second and execute that
        - if 1st condition is incorrect then will not move to second due to nature of && operator - so next option will get executed
       */}
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

/*function App() {
  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul>
    </>
    // </React.Fragment>
  );
}*/

export default App;
