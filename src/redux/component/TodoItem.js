import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTodo, toggleComplete ,editTodo} from '../../store/slice/todo-slice';
import {FcApprove, FcDisapprove} from "react-icons/fc";
import {BsFillPencilFill ,BsFillTrashFill } from "react-icons/bs";
const TodoItem = ({ id, title, completed }) => {
const [isEditTodo, setİsEditTodo] = useState(false);
const [newTodoText, setNewTodoText] = useState(title)
const dispatch =useDispatch()

const handleCompletedClick=()=>{
  dispatch(toggleComplete({id:id, completed:!completed}))
}
const handleDeleteClick =()=>{
  dispatch(deleteTodo({id:id}))
}
const handleEditClick =()=>{
  setİsEditTodo(true)
}
const handleSaveClick =()=>{
  dispatch(editTodo({id, newText:newTodoText,completed}))
  setİsEditTodo(false)
}
const handleInputChange=(e)=>{
  setNewTodoText(e.target.value)
}
return (

  <li className={` list-group-item ${completed && ' list-group-item-success '}`} >
    <div className='d-flex justify-contant- between'> 
      {
      isEditTodo ?(
        <span className='d-flex aling-items-center'>
          <input
          type='checkbox'
          className='mr-3'
          checked={completed}
          onClick={handleCompletedClick}
          /> <input
          type='checkbox'
          className='mr-3'
          checked={newTodoText}
          onClick={handleInputChange}
          />
        <FcApprove
        onClick={handleSaveClick}

        />
        <FcDisapprove
        onClick={()=>setİsEditTodo(false)}
        />
      </span>
      ):(
        <span>
          {title}
          <BsFillPencilFill
          onClick={handleEditClick}
          />
          <BsFillTrashFill
          onClick={handleDeleteClick}
          />
        </span>
      )
      }
    
    </div>

  </li>
)
}

export default TodoItem