import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ list, removeTask, editTask }) => {
  return (
    <div className='grocery-list'>
      {list.map((todo) => {
        const { id, task } = todo;
        return (
          <article key={id} className='grocery-item'>
            <p className='title'>{task}</p>
            <div className='btn-container'>
              <button className='edit-btn' onClick={() => editTask(id)}>
                <FaEdit />
              </button>
              <button className='delete-btn' onClick={() => removeTask(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
