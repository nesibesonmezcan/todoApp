import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
   
    const todos =useSelector((state)=> state.todos)
  
  return (
    <div>
        <ul>
            {todos.map((todo)=>(
               < TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
            ))}
        </ul>
    </div>
  )
}

export default TodoList