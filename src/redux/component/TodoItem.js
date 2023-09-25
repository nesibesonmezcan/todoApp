import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, editTodo } from '../../store/slice/todo-slice';
import { BsCheck2, BsXLg } from 'react-icons/bs';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

const TodoItem = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(title);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleCompletedClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
    focusInput();
  };

  const handleSaveClick = () => {
    dispatch(editTodo({ id: id, newText: editedMessage, completed: completed }));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedMessage(e.target.value);
    focusInput();
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`} style={{ padding: '10px' }}>
      <div className='d-flex justify-content-between align-items-center'>
        {isEditing ? (
          <div className='d-flex align-items-center'>
            <input
              type='text'
              value={editedMessage}
              onChange={handleInputChange}
              ref={inputRef}
              className='form-control'
            />
            <BsCheck2 onClick={handleSaveClick} style={{fontSize:'20px', cursor: 'pointer', marginLeft: '10px' }} />
            <BsXLg onClick={() => setIsEditing(false)} style={{fontSize:'20px', cursor: 'pointer' }} />
          </div>
        ) : (
          <div>
            <span>{editedMessage}</span>
          </div>
        )}
        {!isEditing && (
          <div className='d-flex align-items-center'>
            <BsFillPencilFill onClick={handleEditClick} style={{fontSize:'20px', cursor: 'pointer', marginRight: '10px' }} />
            <BsFillTrashFill onClick={handleDeleteClick} style={{fontSize:'20px', cursor: 'pointer' }} />
          </div>
        )}
      
      </div>
    </li>
  );
};

export default TodoItem;
