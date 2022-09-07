import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import TodoForm from "../components/Todos/TodoForm";
import useHttp from "../hooks/use-http";
import { addTodo, TodoInteface } from "../lib/api";
import { TodoStatusEnum } from "../utils/changeTodoStatus";

// The NewTodo page is a superstructure of the TodoForm. It also renders a loding spinner and displays errors

export type onAddEventTodoInfoType = {
  topic: string;
  text: string;
  status: TodoStatusEnum;
};

const NewTodo = () => {
  const { sendRequest, status } = useHttp(addTodo);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/Todos");
    }
  }, [status, navigate]);

  const addTodoHandler = (data: onAddEventTodoInfoType) => {
    sendRequest(data);
  };

  return (
    <TodoForm isLoading={status === "pending"} onAddTodo={addTodoHandler} />
  );
};

export default NewTodo;
