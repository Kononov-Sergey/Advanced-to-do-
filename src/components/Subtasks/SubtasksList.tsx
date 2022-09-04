import SubTaskItem from "./SubTaskItem";
import { SubtaskType } from "./Subtasks";
import classes from "./SubtasksList.module.css";

const SubtasksList: React.FC<{ Subtasks: SubtaskType[] }> = (props) => {
  return (
    <ul className={classes.Subtasks}>
      {props.Subtasks.map((Subtask) => (
        <SubTaskItem key={Subtask.id} text={Subtask.text} />
      ))}
    </ul>
  );
};

export default SubtasksList;
