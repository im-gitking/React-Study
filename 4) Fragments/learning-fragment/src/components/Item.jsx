const Item = ({ foodItem }) => {
  // Object Destructuing
  // let { foodItem } = props;

  return (
    <li key={foodItem} className="list-group-item">
      {foodItem}
    </li>
  );
};

export default Item;
