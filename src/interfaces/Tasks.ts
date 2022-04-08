export interface Task {
  id?: number;
  title: string;
  description: string;
  state?: boolean;
  handleDelete?: (param: any) => void;
}
