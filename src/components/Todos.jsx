import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
  const styles = {
    container: {
      width: '40%',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
