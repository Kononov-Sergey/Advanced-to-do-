import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";

import { getAllSubtasks } from "../../lib/api";

import LoadingSpinner from "../UI/LoadingSpinner";
import NewSubtaskForm from "./NewSubtaskForm";
import SubtasksList from "./SubtasksList";
import classes from "./Subtasks.module.css";

const Subtasks = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: allSubtasks,
    error,
  } = useHttp(getAllSubtasks, true);
  const [isAddingSubtask, setIsAddingSubtask] = useState(false);

  const { TodoID } = params;

  let subtasks;

  useEffect(() => {
    sendRequest(TodoID);
  }, [sendRequest, TodoID, isAddingSubtask]);

  const startAddSubtaskHandler = () => {
    setIsAddingSubtask(true);
  };

  if (status === "pending") {
    subtasks = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && allSubtasks && allSubtasks.length > 0) {
    subtasks = <SubtasksList Subtasks={allSubtasks} />;
  }

  if (status === "completed" && (!allSubtasks || allSubtasks.length === 0)) {
    subtasks = <p className="centered">No subtasks were added yet!</p>;
  }

  if (error) {
    subtasks = <p className="centered">{error}</p>;
  }
  return (
    <section className={classes.Subtasks}>
      <h2>Subtasks</h2>
      {subtasks}
      {!isAddingSubtask && (
        <button className="btn" onClick={startAddSubtaskHandler}>
          Add a subtask
        </button>
      )}
      {isAddingSubtask && (
        <NewSubtaskForm
          showTextArea={setIsAddingSubtask}
          TodoID={params.TodoID}
        />
      )}
    </section>
  );
};

export default Subtasks;
