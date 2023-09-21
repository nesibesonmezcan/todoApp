import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { getCurrentLang, langs, setCurrentLangs } from '../../helpers/locale-helper'
//import { useSelector } from 'react-redux'

const LangSwitcher = () => {

  const currentLang = getCurrentLang()
console.log(currentLang)
  return (
     <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    <span className={` fi fi-${currentLang.country}`}></span>{currentLang.title}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      {langs.map( item =><Dropdown.Item href="#/action-1" key={item.code} 
      onClick={()=>setCurrentLangs(item)}> 
      <span className={` fi fi-${item.country}`}></span>{item.title}</Dropdown.Item>
)}
  
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default LangSwitcher