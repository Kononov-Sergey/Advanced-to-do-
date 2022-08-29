import { Link } from "react-router-dom";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <figcaption>{props.topic}</figcaption>
        <blockTodo>
          <p>{props.text}</p>
        </blockTodo>
      </figure>
      <Link className="btn" to={`/Todos/${props.id}`}>
        Edit
      </Link>
    </li>
  );
};

export default TodoItem;
