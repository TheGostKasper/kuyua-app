import React from 'react';
import { useTodoStore } from '../store/useTodoStore';

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
};

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const removeTodo = useTodoStore((state) => state.removeTodo);
    
  console.log("TodoItem");

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span
          className={`ml-3 text-lg ${completed ? 'line-through text-gray-400' : ''}`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => removeTodo(id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};
