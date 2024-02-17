function Hello() {
  let myName = 'King';
  let number = 456;
  let fullName = () => {
    return 'King';
  };

  return (
    <h3>
      Message No.: {number}, I am your master {fullName()}
    </h3>
  );
}

export default Hello;
