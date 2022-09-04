import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import TodoForm from "../components/Todos/TodoForm";
import useHttp from "../hooks/use-http";
import { addTodo, TodoInteface } from "../lib/api";

const NewTodo = () => {
  const { sendRequest, status } = useHttp(addTodo);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/Todos", { replace: true });
    }
  }, [status, navigate]);

  const addTodoHandler = (data: TodoInteface) => {
    sendRequest(data);
  };

  return (
    <TodoForm isLoading={status === "pending"} onAddTodo={addTodoHandler} />
  );
};

export default NewTodo;
