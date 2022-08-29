import classes from "./NoTodosFound.module.css";

import { Link } from "react-router-dom";

const NoTodosFound = () => {
  return (
    <div className={classes.noTodos}>
      <p>No Todos found!</p>
      <Link to="/new-Todo" className="btn">
        Add a Todo
      </Link>
    </div>
  );
};

export default NoTodosFound;
