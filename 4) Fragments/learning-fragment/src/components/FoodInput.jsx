import styles from "./FoodInput.module.css";

// const FoodInput = ({ handleOnChange }) => {
const FoodInput = ({ handleKeyDown }) => {
  //   const handleOnChange = (event) => {
  //     console.log(event.target.value);
  //   };

  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter Food Item here"
      // onChange={(event) => console.log(event.target.value)}
      // onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
