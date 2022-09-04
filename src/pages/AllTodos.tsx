import { useEffect, useState } from "react";
import TodoList from "../components/Todos/TodoList";
import NoTodosFound from "../components/Todos/NoTodosFound";
import { getAllTodos, TodoInteface } from "../lib/api";
import useHttp, { httpRequestStatusEnum } from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllTodos = () => {
  const { sendRequest, status, data, error } = useHttp(getAllTodos, true);

  const todos: TodoInteface[] = data;

  const [currentTodos, setCurrentTodos] = useState<TodoInteface[]>([]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    setCurrentTodos(todos || []);
  }, [status]);

  if (status === httpRequestStatusEnum.pending) {
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

  if (
    status === httpRequestStatusEnum.completed &&
    (currentTodos.length === 0 || !currentTodos)
  ) {
    return <NoTodosFound />;
  }

  return <TodoList Todos={currentTodos} setCurrentTodos={setCurrentTodos} />;
};

export default AllTodos;
