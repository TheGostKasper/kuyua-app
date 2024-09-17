import React from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

const CustomCOmpo = () => {
  return (
    <div>
      <h1>Custom Component</h1>
    </div>
  );
};

const Todo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-gray-50 w-full max-w-md rounded-lg shadow p-6">
        <Header />
        <TodoInput />
        <TodoList />
        <CustomCOmpo />
      </div>
    </div>
  );
};

export default Todo;
