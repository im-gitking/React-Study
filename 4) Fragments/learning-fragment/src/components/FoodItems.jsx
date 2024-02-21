import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

  let [activeItems, setAtiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setAtiveItems(newItems);
    console.log(item);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          // handlerBuyButton={() => console.log(`${item} bought`)}
          handlerBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
