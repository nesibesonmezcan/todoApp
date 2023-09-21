import React from 'react'
import { useSelector } from 'react-redux'

const TotalCompleteItems = () => {
    const todos =useSelector((state)=>
    state.todos.filter((todo)=>todo.completed===true)
    )
  return (
    <div>
        <h4> Total copmlete items:{todos.length}</h4>
    </div>
  )
}

export default TotalCompleteItems