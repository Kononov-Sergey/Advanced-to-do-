import React from "react";
import classes from "./DeleteButton.module.css";
const DeleteButton: React.FC<{
  onClick: () => void;
  aditionalClasses?: string;
}> = ({ onClick, aditionalClasses }) => {
  return (
    <button
      title="Delete a Todo"
      className={`${classes["del-btn"]} ${aditionalClasses}`}
      onClick={onClick}
    >
      <span className={classes["f-line"]} />
      <span className={classes["s-line"]} />
    </button>
  );
};

export default DeleteButton;
