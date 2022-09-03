import { useParams } from "react-router-dom";
import { useEffect } from "react";

import HighlightedTodo from "../components/Todos/HighlightedTodo";
import Subtasks from "../components/Subtasks/Subtasks";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getSingleTodo } from "../lib/api";

const TodoDetail = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: Todo,
    error,
  } = useHttp(getSingleTodo, true);

  useEffect(() => {
    sendRequest(params.TodoID);
  }, [sendRequest, params.TodoID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered">
        <h1>{error}</h1>
      </div>
    );
  }

  if (!Todo.text) {
    return (
      <div className="centered">
        <h1>Not Todo found!</h1>
      </div>
    );
  }

  return (
    <>
      <HighlightedTodo
        text={Todo.text}
        topic={Todo.topic}
        TodoId={params.TodoID}
        status={Todo.status}
      />
      <Subtasks />
    </>
  );
};

export default TodoDetail;
