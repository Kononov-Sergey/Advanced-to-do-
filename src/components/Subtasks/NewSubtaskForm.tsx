import { useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addSubtask, addSubtaskArgumentType } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewSubtaskForm.module.css";

const NewSubtaskForm: React.FC<{
  todoID: string | undefined;
  showTextArea: (arg: boolean) => void;
}> = (props) => {
  const { sendRequest, status } = useHttp(addSubtask);
  const SubtaskTextRef = useRef<HTMLTextAreaElement | null>(null);

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (SubtaskTextRef.current?.value !== "" && props.todoID) {
      const newSubtaskInfo: addSubtaskArgumentType = {
        subtaskData: { text: SubtaskTextRef.current!.value },
        todoId: props.todoID,
      };
      await sendRequest(newSubtaskInfo);
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
        <textarea id="Subtask" rows={5} ref={SubtaskTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Subtask</button>
      </div>
    </form>
  );
};

export default NewSubtaskForm;
