import { useEffect, useState } from "react";
import TodoList from "../components/Todos/TodoList";
import NoTodosFound from "../components/Todos/NoTodosFound";
import { getAllTodos } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllTodos = () => {
  const {
    sendRequest,
    status,
    data: Todos,
    error,
  } = useHttp(getAllTodos, true);

  const [currentTodos, setCurrentTodos] = useState();

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    setCurrentTodos(Todos || []);
  }, [status]);

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

  if (status === "completed" && (currentTodos.length === 0 || !currentTodos)) {
    return <NoTodosFound />;
  }

  return <TodoList Todos={currentTodos} setCurrentTodos={setCurrentTodos} />;
};

export default AllTodos;
