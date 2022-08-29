import { useEffect } from "react";
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

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === "completed" && (Todos.length === 0 || !Todos)) {
    return <NoTodosFound />;
  }

  return <TodoList Todos={Todos} />;
};

export default AllTodos;
