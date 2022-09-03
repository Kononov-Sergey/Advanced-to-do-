import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { updateTodo } from "../../lib/api";
import classes from "./HighlightedTodo.module.css";

const HighlightedTodo = (props) => {
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [topicInput, setTopicInput] = useState(props.topic);
  const [textInput, setTextInput] = useState(props.text);

  const { sendRequest, status } = useHttp(updateTodo);

  const navigate = useNavigate();

  const submitUpdatedTodoInput = (event) => {
    event.preventDefault();

    sendRequest({
      TodoId: props.TodoId,
      topic: topicInput,
      text: textInput,
      status: props.status,
    });
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/Todos", { replace: true });
    }
  }, [status, navigate]);

  useEffect(() => {
    if (props.topic !== topicInput || props.text !== textInput) {
      setIsDataChanged(true);
    } else {
      setIsDataChanged(false);
    }
  }, [topicInput, textInput]);

  return (
    <form className={classes.Todo}>
      <label>Topic:</label>
      <input
        onInput={(event) => {
          setTopicInput(event.currentTarget.value);
        }}
        defaultValue={topicInput}
      ></input>
      <label>Text:</label>
      <textarea
        onInput={(event) => {
          setTextInput(event.currentTarget.value);
        }}
        defaultValue={textInput}
      ></textarea>
      {isDataChanged && (
        <button
          type="submit"
          onClick={submitUpdatedTodoInput}
          className={classes["change-btn"]}
        >
          Change
        </button>
      )}
    </form>
  );
};

export default HighlightedTodo;
