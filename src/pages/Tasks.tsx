import { ChangeEvent, FormEvent, useRef, useState } from "react";
import logo from "../logo.svg";
import { Task } from "../interfaces/Tasks";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Button from "../components/utils/Button";
import { AiOutlinePlus } from "react-icons/ai";

const todos = [
  { id: 1, title: "eat", description: "9 oclock", state: false },
  { id: 2, title: "cook", description: "evening", state: false },
];

interface Props {
  title?: string;
}

type InputTypes = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TasksPage = ({ title }: Props) => {
  const [tasks, setTasks] = useState<Task[]>(todos);
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
  });

  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmitData = (e: FormEvent) => {
    e.preventDefault();
    const taskId = Date.now();

    setTasks([...tasks, { ...task, id: taskId, state: false }]);
    setTask({ title: "", description: "" });

    inputEl.current?.focus();
  };

  const handleInputChange = ({ target: { name, value } }: InputTypes) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const deleteTask = (id: number): void => {
    const tasksAvailable = tasks.filter((task) => task.id !== id);
    setTasks([...tasksAvailable]);
  };

  return (
    <div className="h-screen bg-slate-700 text-white">
      <nav className="bg-blue-600">
        <div className="w-11/12 mx-auto flex items-center">
          <a href="/">
            <img className="w-20 h-20" src={logo} alt="React" />
          </a>
          {title && <h1 className="text-xl">{title}</h1>}
        </div>
      </nav>
      <main className="w-11/12  mx-auto pt-5 grid grid-cols-2 gap-4 ">
        <div>
          <TaskForm handleSubmit={handleSubmitData}>
            <div className="pb-5 text-left">
              <label className="block mb-2" htmlFor="title">
                Title
              </label>
              <input
                ref={inputEl}
                autoFocus
                required
                className="w-full appearance-none border rounded-md p-2 text-black outline-none"
                type="text"
                id="title"
                name="title"
                placeholder="title"
                onChange={handleInputChange}
                value={task.title}
              />
            </div>
            <div className="pb-5">
              <label className="block mb-2 text-left" htmlFor="description">
                Description
              </label>
              <textarea
                required
                maxLength={50}
                className="w-full appearance-none border rounded-md p-2 text-black outline-none"
                id="description"
                name="description"
                placeholder="description"
                onChange={handleInputChange}
                value={task.description}
              />
            </div>
            <Button>
              <div className="flex items-center">
                Save <AiOutlinePlus />
              </div>
            </Button>
          </TaskForm>
        </div>

        <div className="grid place-items-center gap-4 ">
          {tasks.map((item) => {
            return (
              <TaskCard key={item.id} {...item} handleDelete={deleteTask} />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default TasksPage;
