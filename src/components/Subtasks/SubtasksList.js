import SubTaskItem from "./SubTaskItem";
import classes from "./SubtasksList.module.css";

const SubtasksList = (props) => {
  return (
    <ul className={classes.Subtasks}>
      {props.Subtasks.map((Subtask) => (
        <SubTaskItem key={Subtask.id} text={Subtask.text} />
      ))}
    </ul>
  );
};

export default SubtasksList;
