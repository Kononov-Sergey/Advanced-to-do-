import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TodoInteface } from "../../lib/api";
import { TodoStatusEnum } from "../../utils/changeTodoStatus";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const sortTodos = (
  Todos: TodoInteface[],
  ascending: boolean
): TodoInteface[] => {
  return Todos.sort((TodoA, TodoB) => {
    if (ascending) {
      return TodoA.id > TodoB.id ? 1 : -1;
    } else {
      return TodoA.id < TodoB.id ? 1 : -1;
    }
  });
};

const TodoList: React.FC<{
  Todos: TodoInteface[];
  setCurrentTodos: (
    state: TodoInteface[] | ((state: TodoInteface[]) => TodoInteface[])
  ) => void;
}> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  const isSortingAscending = query.get("sort") === "asc";

  const sortedTodos = sortTodos(props.Todos, isSortingAscending);

  type sortedByStatusTodosType = {
    pending: JSX.Element[];
    inProgress: JSX.Element[];
    done: JSX.Element[];
  };

  const sortedByStatusTodos: sortedByStatusTodosType = {
    pending: [],
    inProgress: [],
    done: [],
  };

  // due to each re-render of component when props are changed this line will work properly without useEffect and e.t.c
  sortedTodos.forEach((todo) => {
    if (todo.status === TodoStatusEnum.pending) {
      sortedByStatusTodos.pending.push(
        <TodoItem
          setCurrentTodos={props.setCurrentTodos}
          key={todo.id}
          id={todo.id}
          topic={todo.topic}
          text={todo.text}
          status={todo.status}
        />
      );
    }
    if (todo.status === TodoStatusEnum.inProgress) {
      sortedByStatusTodos.inProgress.push(
        <TodoItem
          setCurrentTodos={props.setCurrentTodos}
          key={todo.id}
          id={todo.id}
          topic={todo.topic}
          text={todo.text}
          status={todo.status}
        />
      );
    }
    if (todo.status === TodoStatusEnum.done) {
      sortedByStatusTodos.done.push(
        <TodoItem
          setCurrentTodos={props.setCurrentTodos}
          key={todo.id}
          id={todo.id}
          topic={todo.topic}
          text={todo.text}
          status={todo.status}
        />
      );
    }
  });
  sortedByStatusTodos.pending.push(
    <Link className={classes["add-todo-btn"]} to={"/new-Todo"}>
      + Add todo
    </Link>
  );
  const changeSortingHadnler = () => {
    navigate(`?sort=${isSortingAscending ? "desc" : "asc"}`);
  };
  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHadnler}>{`Sort ${
          isSortingAscending ? "Descending" : "Asending"
        }`}</button>
      </div>
      <div className={classes.columns}>
        <ul className={classes.list}>
          <li className={classes.pending}>Pending:</li>
          {sortedByStatusTodos.pending}
        </ul>
        <ul className={classes.list}>
          <li className={classes["in-progress"]}>In Progress:</li>
          {sortedByStatusTodos.inProgress}
        </ul>
        <ul className={classes.list}>
          <li className={classes.done}>Done:</li>
          {sortedByStatusTodos.done}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
