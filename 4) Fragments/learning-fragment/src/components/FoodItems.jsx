import Item from "./Item";

const FoodItems = ({ items }) => {
  //   let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
