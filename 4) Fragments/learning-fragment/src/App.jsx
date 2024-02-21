// import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
// importing useState hook
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

  // //1) If-else Method
  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry.</h3>;
  // }

  // let emptyMessage = foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null;

  // let textToShow = "Food Item Enter by User";

  /*// useState is a hook
  // useState() returns an Array of 2 elements
  let textStateArr = useState("Food Item Enter by User");
  // 1st element of Array --> value of current state
  let textToShow = textStateArr[0];
  // 2nd element of Array --> method for changing value of state
  let setTextState = textStateArr[1];
  console.log("Current value of textState:", textToShow);*/

  // let [textToShow, setTextState] = useState("Food Item Enter by User");
  // console.log("Current value of textState:", textToShow);

  let [foodItems, setfoodItems] = useState([]);

  const oKeyDown = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
      console.log("Food value entered is: " + newFoodItem);
    }
    // changing state
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>

        {/* <FoodInput handleonKeyDown={handleOnChange}></FoodInput> */}
        <FoodInput handleKeyDown={oKeyDown}></FoodInput>
        <ErrorMessage items={foodItems} />

        {/* <p>{textToShow}</p> */}
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
        <FoodItems items={foodItems} />
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
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
