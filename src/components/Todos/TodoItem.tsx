import { Link } from "react-router-dom";
import { deleteTodo, TodoInteface, updateTodo } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import classes from "./TodoItem.module.css";
import changeTodoStatus, { TodoStatusEnum } from "../../utils/changeTodoStatus";
import DeleteButton from "../UI/DeleteButton";
import { useEffect } from "react";

// in this comp i decided to describe all props certainly, so it looks a little bit ugly but i'm assure that all throw throught the props are arrived precisely

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
    // in React we can give a setFunction in useState not only a certain value but a callback that returns a value,
    // where the first arg in this callback will be prev state
    // as you can see, i've used this trick to safety update (delete in this case) useState value according to the prev state
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
          return {
            ...todo,
            status: newState,
          };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    if (props.id) {
      sendUpdateRequest({
        id: props.id,
        text: props.text,
        topic: props.topic,
        status: props.status,
      });
    }
  }, [props.status]);

  return (
    <li className={classes.item}>
      <figure>
        <figcaption>{props.topic}</figcaption>
        <p>{props.text}</p>
      </figure>
      <div className={classes["btn-section"]}>
        {props.status !== "DONE" && (
          <button className="btn" onClick={onChangeTodoStatus}>
            <span>Next step</span>
          </button>
        )}
        <Link className="btn" to={`/Todos/${props.id}`}>
          <span>Edit & detail</span>
        </Link>
      </div>
      <DeleteButton
        onClick={onDeleteTodoHandler}
        aditionalClasses="del-btn__position-TodoItem"
      />
    </li>
  );
};

export default TodoItem;
