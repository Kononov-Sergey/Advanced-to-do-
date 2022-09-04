import classes from "./SubTaskItem.module.css";

const SubTaskItem: React.FC<{ text: string }> = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default SubTaskItem;
