import React, { useRef } from "react";
import { onAddEventTodoInfoType } from "../../pages/NewTodo";
import { TodoStatusEnum } from "../../utils/changeTodoStatus";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./TodoForm.module.css";

const TodoForm: React.FC<{
  onAddTodo: (todo: onAddEventTodoInfoType) => void;
  isLoading: boolean;
}> = (props) => {
  const topicInputRef = useRef<HTMLInputElement | null>(null);
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredTopic = topicInputRef.current?.value || "";
    const enteredText = textInputRef.current?.value || "";

    props.onAddTodo({
      topic: enteredTopic,
      text: enteredText,
      status: TodoStatusEnum.pending,
    });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="topic">Topic</label>
          <input required type="text" id="topic" ref={topicInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea required id="text" rows={5} ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit" className="btn">
            Add Todo
          </button>
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
