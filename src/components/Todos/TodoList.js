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
      <ul className={classes.list}>
        {sortedTodos.map((Todo) => (
          <TodoItem
            key={Todo.id}
            id={Todo.id}
            topic={Todo.topic}
            text={Todo.text}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
