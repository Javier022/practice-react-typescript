import Button from "./utils/Button";
import { Task } from "../interfaces/Tasks";

const TaskCard = ({ id, title, description, state, handleDelete }: Task) => {
  return (
    <div className="w-4/5 border border-blue-600 rounded-md pb-3">
      <h2 className="text-lg bg-blue-600">{title} </h2>
      <p className="text-lg pt-4 pb-3">{description}</p>
      <Button text="Delete" fn={() => handleDelete && handleDelete(id)} />
    </div>
  );
};

export default TaskCard;
