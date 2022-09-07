import React from "react";
import classes from "./DeleteButton.module.css";
// reusable delete btn, the most common patern in React

const DeleteButton: React.FC<{
  onClick: () => void;
  aditionalClasses?: string;
}> = ({ onClick, aditionalClasses }) => {
  return (
    <button
      title="Delete a Todo" // for best accessibilities
      className={`${classes["del-btn"]} ${aditionalClasses}`} // that kind of line give us more flexibility when you work with reusable comp
      onClick={onClick}
    >
      <span className={classes["f-line"]} />
      <span className={classes["s-line"]} />
    </button>
  );
};

export default DeleteButton;
