import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  };

  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
