import { Link } from "react-router-dom";
import { deleteTodo, TodoInteface, updateTodo } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import classes from "./TodoItem.module.css";
import changeTodoStatus, { TodoStatusEnum } from "../../utils/changeTodoStatus";

const TodoItem: React.FC<{
  setCurrentTodos: (
    state: TodoInteface[] | ((state: TodoInteface[]) => TodoInteface[])
  ) => void;
  key: string;
  id: string;
  topic: string;
  text: string;
  status: TodoStatusEnum;
}> = (props) => {
  const { sendRequest: sendDeleteRequest } = useHttp(deleteTodo, true);
  const { sendRequest: sendUpdateRequest } = useHttp(updateTodo, true);

  const onDeleteTodoHandler = () => {
    sendDeleteRequest(props.id);
    props.setCurrentTodos((state) => {
      const newState: TodoInteface[] = JSON.parse(JSON.stringify(state));
      return newState.filter((todo) => todo.id !== props.id);
    });
  };

  const onChangeTodoStatus = () => {
    props.setCurrentTodos((state) => {
      return state.map((todo: TodoInteface) => {
        if (todo.id === props.id) {
          const newState = changeTodoStatus(todo.status);
          sendUpdateRequest({
            id: props.id,
            text: props.text,
            topic: props.topic,
            status: newState,
          });
          return {
            ...todo,
            status: newState,
          };
        }
        return todo;
      });
    });
  };

  return (
    <li className={classes.item}>
      <figure>
        <figcaption>{props.topic}</figcaption>
        <p>{props.text}</p>
      </figure>
      <button className="btn" onClick={onDeleteTodoHandler}>
        Delete
      </button>
      {props.status !== "DONE" && (
        <button className="btn" onClick={onChangeTodoStatus}>
          Next Step
        </button>
      )}
      <Link className="btn" to={`/Todos/${props.id}`}>
        Edit & detail
      </Link>
    </li>
  );
};

export default TodoItem;
