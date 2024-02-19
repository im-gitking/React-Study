import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  // Object Destructuing
  // let { foodItem } = props;

  // console.log(styles);

  return (
    <li key={foodItem} className={`list-group-item ${styles["kg-item"]}`}>
      {/* <li key={foodItem} className="list-group-item kg-item"> */}
      <span className={styles["kg-item"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
