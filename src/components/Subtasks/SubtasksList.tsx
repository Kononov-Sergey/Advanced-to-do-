import SubTaskItem from "./SubTaskItem";
import { SubtaskType } from "./Subtasks";
import classes from "./SubtasksList.module.css";

const SubtasksList: React.FC<{ Subtasks: SubtaskType[] }> = (props) => {
  return (
    <ul className={classes.Subtasks}>
      {/* when we want render a bunch of element and display them on the screen of our app you can you arrays and func map, 
      that generally just returns a copy of initial array, and if we fill this new array in with JSX elems React will be render this whole array on the screen */}
      {props.Subtasks.map((Subtask) => (
        <SubTaskItem key={Subtask.id} text={Subtask.text} />
      ))}
    </ul>
  );
};

export default SubtasksList;
