import css from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container">
      <div className={`row ${css["kg-row"]}`}>
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${css["kg-button"]}`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
