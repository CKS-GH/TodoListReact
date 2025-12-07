import CreateForm from "./CreateForm";
import Todo from "./Todo";
import { useState } from "react";
function TodoWrapper() {
  const [todos, setTodos] = useState([
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random(),isCompleted: false, isEditing: false}]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        }
        return todo;
      })
    );
  };
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, content: newContent,isEditing:false } : todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
