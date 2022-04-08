import { FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
}

const TaskForm = ({ children, handleSubmit }: Props) => {
  return (
    <form
      className="w-4/5 border border-blue-600 rounded-md py-5 px-5"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default TaskForm;
