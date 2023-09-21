import React from 'react'

import DarkModeSwitcher from './component/dark-mode/dark-mode-switcher'
import "bootstrap/dist/css/bootstrap.min.css"
import LangSwitcher from './component/lang-switcher/lang-switcher'
import { useSelector } from 'react-redux'
import "./App.css"
import { $t } from './helpers/locale-helper'
import AddTodoForm from './redux/component/AddTodoForm'
import TodoList from './redux/component/TodoList'
import TotalCompleteItems from './redux/component/TotalCompleteItems'

const   App =()=>{
  const darkMode =useSelector(state=> state.theme.darkMode)
 const currentLang =useSelector(state=> state.locale.lang)
  return (

      <div className={darkMode ? "dark":""}>
        <DarkModeSwitcher/>
        <LangSwitcher/>
        <h1>
          {$t("hello-world")}
        </h1>
        <h1>My Todo List</h1>
        <AddTodoForm/>
        <TodoList/>
        <TotalCompleteItems/>


      </div>

  )
}

export default App