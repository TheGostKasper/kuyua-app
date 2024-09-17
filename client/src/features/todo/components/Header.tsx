import { useTodoStore } from "../store/useTodoStore";

export const Header: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <h1 className="text-3xl font-bold text-center text-gray-700">
      Todo App {todos.length}
    </h1>
  );
};
