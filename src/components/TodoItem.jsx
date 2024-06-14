import React, { useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => ({
    textDecoration: todo.completed ? 'line-through' : 'none',
    color: todo.completed ? '#bbb' : '#333',
    margin: '0 10px',
  });

  const styles = {
    todoItem: {
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      padding: '10px 20px',
      width: '60%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'transform 0.2s',
    },
    checkbox: {
      height: '20px',
      width: '20px',
      cursor: 'pointer',
    },
    button: {
      backgroundColor: '#ff6347',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '5px 10px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    buttonHover: {
      backgroundColor: '#e5533d',
    },
  };

  return (
    <div
      style={styles.todoItem}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
