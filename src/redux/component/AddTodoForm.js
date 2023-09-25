import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slice/todo-slice';

const AddTodoForm = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      title: value
    }));
    setValue('');
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Giriş alanının değerine bağlı olarak submit düğmesini devre dışı bırakma
  const isSubmitDisabled = !value.trim();

  return (
    <div>
      <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
        <label>Name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Add todo'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
        />
        <button
          disabled={isSubmitDisabled}
          onClick={focusInput}
          type='submit'
          className='btn btn-info'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
