import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    if (!task) {
      // show alert
      // setAlert({ show: true, msg: 'please enter value', type: 'danger' });
      showAlert(true, 'please enter value', 'danger');
    } else if (task && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, task };
          }
          return item;
        })
      );
      setTask('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'value changed', 'success');
    } else {
      // show new task
      const newTask = { id: new Date().getTime().toString(), task };
      console.log(newTask);
      setList([...list, newTask]);
      setTask('');
      // setAlert({ show: true, msg: 'task add into the list', type: 'success' });
      showAlert(true, 'task add into the list', 'success');
    }
  };

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  };

  const removeTask = (id) => {
    showAlert(true, 'item removed', 'danger');
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    console.log('hello');
  };

  const editTask = (id) => {
    const specificTask = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setTask(specificTask.task);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='new task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List list={list} removeTask={removeTask} editTask={editTask} />
          <button className='clear-btn' onClick={clearList}>
            clear all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
