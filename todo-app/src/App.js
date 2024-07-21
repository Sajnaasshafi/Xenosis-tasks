import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setToDo(todo.task);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setIsEditing(false);
    setCurrentTodo({});
    setToDo("");
    setModalIsOpen(false);
  };

  const addOrEditTodo = () => {
    if (isEditing) {
      setToDos(
        toDos.map((item) =>
          item.id === currentTodo.id ? { ...item, task: toDo } : item
        )
      );
      closeModal();
    } else {
      setToDos([...toDos, { id: Date.now(), task: toDo }]);
    }
    setToDo("");
  };

  const deleteTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday...</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder=" Add item..."
        />
        <i onClick={addOrEditTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <p>{todo.task}</p>
            </div>
            <div className="right">
              <i onClick={() => openModal(todo)} className="fas fa-edit"></i>
              <i onClick={() => deleteTodo(todo.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Task"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Edit</h2>
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
        />
        <button onClick={addOrEditTodo}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
}

export default App;
