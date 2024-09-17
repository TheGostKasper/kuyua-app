import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  console.log("TodoInput");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};
