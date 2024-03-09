import React, { useEffect, useState } from 'react'
import './header.css'

function Header() {

  let [ showIcons , setShowIcons ] = useState(false);
  let [ theme , setTheme ] = useState( localStorage.getItem("currentMode") ?? "dark" );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  }, [theme])

  return (
    <header>
      <button className='icon-menu' onClick={()=>setShowIcons(true)}></button>
      <div />
      { showIcons && <nav>
        <ul>
          <li><button className='icon-cross' onClick={() => setShowIcons(false)}/></li>
          <li><a href="!">About</a></li>
          <li><a href="!">Articles</a></li>
          <li><a href="!">Projects</a></li>
          <li><a href="!">Speaking</a></li>
          <li><a href="!">Contact</a></li>
        </ul>
      </nav> }
      <ul className='largeMedia'>
          <li><a href="!">About</a></li>
          <li><a href="!">Articles</a></li>
          <li><a href="!">Projects</a></li>
          <li><a href="!">Speaking</a></li>
          <li><a href="!">Contact</a></li>
      </ul>
      <button className={theme === "dark" ? "icon-sun" : "icon-moon"} onClick={()=>{ 
        localStorage.setItem("currentMode",theme === "dark" ? "light" : "dark")
        setTheme(localStorage.getItem("currentMode"))
      }} />
    </header>
  )
}

export default Header