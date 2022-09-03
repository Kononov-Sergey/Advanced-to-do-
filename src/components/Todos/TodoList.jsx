import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const sortTodos = (Todos, ascending) => {
  return Todos.sort((TodoA, TodoB) => {
    if (ascending) {
      return TodoA.id > TodoB.id ? 1 : -1;
    } else {
      return TodoA.id < TodoB.id ? 1 : -1;
    }
  });
};

const TodoList = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  const isSortingAscending = query.get("sort") === "asc";

  const sortedTodos = sortTodos(props.Todos, isSortingAscending);

  const sortedByStatusTodos = {
    pending: [],
    inProgress: [],
    done: [],
  };

  // due to each re-render of component when props are changed this line will actually work without useEffect and e.t.c
  sortedTodos.forEach((todo) => {
    if (todo.status === "PENDING") {
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
    if (todo.status === "IN_PROGRESS") {
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
    if (todo.status === "DONE") {
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
  console.log(sortedByStatusTodos);
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
