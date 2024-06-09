import React from 'react';

const TodoItem = ({ todo }) => {
  const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
      padding: '8px',
      margin: '4px 0',
    },
  };

  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  );
};

export default TodoItem;
