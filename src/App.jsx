import React, { useState, createContext } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: true,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    title: {
      fontSize: '48px',
      color: '#333',
      marginBottom: '20px',
    },
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo, addTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
