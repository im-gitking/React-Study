import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handlerBuyButton }) => {
  // Object Destructuing
  // let { foodItem } = props;

  // console.log(styles);

  // const handlerBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };

  return (
    <li
      key={foodItem}
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      {/* <li key={foodItem} className="list-group-item kg-item"> */}
      <span className={styles["kg-item"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => console.log(`${foodItem} being bought`)}
        // onClick={(event) => handlerBuyButtonClicked(event)}
        onClick={handlerBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
