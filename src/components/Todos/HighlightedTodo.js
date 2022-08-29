import classes from "./HighlightedTodo.module.css";

const HighlightedTodo = (props) => {
  return (
    <figure className={classes.Todo}>
      <p>{props.text}</p>
      <figcaption>{props.topic}</figcaption>
    </figure>
  );
};

export default HighlightedTodo;
