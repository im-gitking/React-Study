const Container = ({ children }) => {
  return (
    <div className="card" style={{ minWidth: "70%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
