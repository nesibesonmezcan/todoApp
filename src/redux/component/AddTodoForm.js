import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/slice/todo-slice';

const AddTodoForm = () => {
    const [value, setValue] = useState("")
const dispatch=useDispatch();
const onSubmit =(e)=>{
    e.preventDefault();
    dispatch(addTodo({
        title:value
    }))
    
}
  return (
    <div>
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
            <label>Name</label>
            <input
            type='text'
            className='form-control '
            placeholder='Add todo'
            value={value}
            onChange={(e) => setValue(e.target.value)}

            />
            <button type='submit' className='btn btn-info'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default AddTodoForm