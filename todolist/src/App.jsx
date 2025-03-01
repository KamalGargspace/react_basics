import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components/Index";

function App() {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), completed: false, ...todo }, ...prev]);
  };

  // Update Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo))
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle Complete (Fix: Properly checking `todo.id`)
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load Todos from Local Storage on Mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  // Save Todos to Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      {/* Background Image with Opacity */}
      <div
        className="relative min-h-screen flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?cs=srgb&dl=pexels-veeterzy-114979.jpg&fm=jpg')",
        }}
      >
        {/* Overlay to add opacity */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Todo Container */}
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-5 text-white bg-[#1e3a8a] relative z-10">
          <h1 className="text-3xl font-bold text-center mb-6">Manage Your Todos</h1>

          {/* Todo Form */}
          <div className="mb-5">
            <TodoForm />
          </div>

          {/* Todo List */}
          <div className="space-y-3">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-300">No Todos Available</p>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
