import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { TodoInteface, updateTodo } from "../../lib/api";
import { TodoStatusEnum } from "../../utils/changeTodoStatus";
import classes from "./HighlightedTodo.module.css";

const HighlightedTodo: React.FC<{
  text: string;
  topic: string;
  todoId: string;
  status: TodoStatusEnum;
}> = (props) => {
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [topicInput, setTopicInput] = useState(props.topic);
  const [textInput, setTextInput] = useState(props.text);

  const { sendRequest, status } = useHttp(updateTodo);

  const navigate = useNavigate();

  const submitUpdatedTodoInput = (event: React.FormEvent<HTMLFormElement>) => {
    // i called "event.preventDefault();"" cause we don't want to refresh the whole page during the submit form event,
    // instead we call this func, and do what we wanna do
    // even though we want to navigate to another page, we should use diff tools for that (in our case useNavigate)
    // because React bases on concept called SPA (single page application), and we MUST not allow our app reload the page entirely
    event.preventDefault();
    const UpdatedTodo: TodoInteface = {
      id: props.todoId,
      topic: topicInput,
      text: textInput,
      status: props.status,
    };
    sendRequest(UpdatedTodo);
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
    <form onSubmit={submitUpdatedTodoInput} className={classes.Todo}>
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
        rows={2}
      ></textarea>
      {isDataChanged && (
        <button type="submit" className={classes["change-btn"]}>
          Change
        </button>
      )}
    </form>
  );
};

export default HighlightedTodo;
