import React from "react";
import { useTodoStore } from "../store/useTodoStore";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);

  console.log("todos");

  return (
    <div className="mt-6">
      {todos.length === 0 && (
        <p className="text-center text-gray-500">No todos yet!</p>
      )}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
