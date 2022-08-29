import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addSubtask } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewSubtaskForm.module.css";

const NewSubtaskForm = (props) => {
  const { sendRequest, status, error } = useHttp(addSubtask);
  const SubtaskTextRef = useRef();

  const submitFormHandler = async (event) => {
    event.preventDefault();
    if (SubtaskTextRef.current.value != "") {
      await sendRequest({
        TodoId: props.TodoID,
        SubtaskData: { text: SubtaskTextRef.current.value },
      });
      props.showTextArea(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control}>
        <label htmlFor="Subtask">Your Subtask</label>
        <textarea id="Subtask" rows="5" ref={SubtaskTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Subtask</button>
      </div>
    </form>
  );
};

export default NewSubtaskForm;
