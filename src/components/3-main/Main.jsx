import React, { useState } from 'react'
import './main.css'
import { AnimatePresence, motion } from "framer-motion"

let myProjects = [
  { projectTitle:"React project", category:["react"] , imgPath:'imgs/1.jpg' },
  { projectTitle:"React&CSS project", category:["react","css"] , imgPath:'imgs/2.jpg' },
  { projectTitle:"CSS project", category:["css"] , imgPath:'imgs/3.jpg' },
  { projectTitle:"React project", category:["react"] , imgPath:'imgs/4.jpg' },
  { projectTitle:"CSS project", category:["css"] , imgPath:'imgs/5.jpg' },
  { projectTitle:"Javascript project", category:["js"] , imgPath:'imgs/6.jpg' },
  { projectTitle:"Node project", category:["node"] , imgPath:'imgs/7.jpg' },
  { projectTitle:"Node project", category:["node"] , imgPath:'imgs/8.jpg' },
  { projectTitle:"Javascript project", category:["js"] , imgPath:'imgs/9.jpg' }
]

function Main() {
  let [ current , setCurrent ] = useState("all")
  let [ arr , setArr ] = useState(myProjects)

  function handleProjects(title) {
    arr = myProjects.filter(item => {
      return item.category.includes(title)
    })
    setArr(arr)
  }

  return (
    <section className="main">
      <div className="buttons">
        <button onClick={() => {
          setCurrent("all")
          setArr(myProjects)
        }} className={current==="all"?"active":null}>All Projects</button>
        <button onClick={() => {
          setCurrent("css")
          handleProjects("css")
        }} className={current==="css"?"active":null}>Html & CSS</button>
        <button onClick={() => {
          setCurrent("js")
          handleProjects("js")
        }} className={current==="js"?"active":null}>Javascript</button>
        <button onClick={() => {
          setCurrent("react")
          handleProjects("react")
        }} className={current==="react"?"active":null}>React & MUI</button>
        <button onClick={() => {
          setCurrent("node")
          handleProjects("node")
        }} className={current==="node"?"active":null}>Node & Express</button>
      </div>
      <div className="projects">
      <AnimatePresence>
        {arr.map((item,i)=>{
          return (
            <motion.div 
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type:"spring",damping:8,stiffness:50}}
              className="box" key={i}>
              <img src={item.imgPath} alt="" />
              <div className="content">
                <h2>{item.projectTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam? Debitis veritatis dicta exercitationem eaque.</p>
                <div className="icons">
                  <div>
                    <span className="icon-link"></span>
                    <span className="icon-github"></span>
                  </div>
                  <span className="more">more<span className="icon-arrow-right"></span></span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
      </div>
    </section>
  )
}

export default Main