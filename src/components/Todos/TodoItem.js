import { Link } from "react-router-dom";
import { deleteTodo } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const { sendRequest } = useHttp(deleteTodo, true);

  return (
    <li className={classes.item}>
      <figure>
        <figcaption>{props.topic}</figcaption>
        <blockTodo>
          <p>{props.text}</p>
        </blockTodo>
      </figure>
      <button
        className="btn"
        onClick={() => {
          sendRequest(props.id);
          props.setCurrentTodos((state) => {
            const newState = JSON.parse(JSON.stringify(state));
            return newState.filter((todo) => todo.id !== props.id);
          });
        }}
      >
        Delete
      </button>
      <Link className="btn" to={`/Todos/${props.id}`}>
        Edit
      </Link>
    </li>
  );
};

export default TodoItem;
