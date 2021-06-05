import React from "react";
import Input from "./Input";

const PasswordInput = (props) => {
  const [show, setShow] = React.useState();
  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="form-group">
      <Input plain {...props} type={show ? "text" : "password"} />
      <button
        type="button"
        onClick={handleClick}
        className="fas fa-eye absolute right-4 top-4 focus:outline-none"
      ></button>
    </div>
  );
};

export default PasswordInput;
