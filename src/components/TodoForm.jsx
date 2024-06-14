import React, { useState, useContext } from 'react';
import { TodoContext } from '../App';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const styles = {
    container: {
      marginBottom: '32px',
    },
    formInput: {
      height: '50px',
      width: '60%',
      fontSize: '16px',
      padding: '0 16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginRight: '10px',
    },
    button: {
      height: '50px',
      fontSize: '16px',
      padding: '0 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={handleChangeTitle}
          value={title}
        />
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
