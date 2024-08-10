"use client"

import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [tasks, setTasks] = useState([])
  const submitcontrol = (e)=>{
    e.preventDefault()
    if (task == "" || desc == ""){
      alert("Enter the details of the task")
    }
    else{
    setTasks([...tasks, {task, desc}])
    setTask("")
    setDesc("")
    console.log(tasks)
    }
  }
  let render_data = <h1>No Tasks available</h1>
  if(tasks.length>0){
    render_data = tasks.map((elem, i)=>{
      return (
        <>
          <li key={i} className='elements'>
            <div>
              <span><strong>Task {i+1}:</strong></span>
              <span className='px-3'>{elem.task}</span>
            </div>
            <div>
              <span><strong>Description:</strong></span>
              <span className='px-3'>{elem.desc}</span>
            </div>
            <button 
            onClick={(i)=>{
              if(confirm("Are you sure?"))
              {
                let c = [...tasks]
                c.splice(i,1)
                setTasks(c)
                console.log("item deleted")
                console.log(tasks.length)
              }
            }}
            className='listitem'>
            X
            </button>
          </li>
          <hr/>
        </>
      )
    })
  }
  return (
    <>
      <div className='Header'>
        <h1 className='title'>To-Do App</h1>
      </div>
      <div className='main'>
        <form className='form'>
          <h1 className='heading'>
            Enter the task and description below
          </h1>
          <input
            type='text'
            className='inp'
            value={task}
            onChange={(e)=>
              setTask(e.target.value)
            }
            placeholder='Enter the Task'
          />
            <input
              type='text'
              className='inp'
              value={desc}
              onChange={(e)=>
                setDesc(e.target.value)
              }
              placeholder='Enter the Description'
          />
          <button 
          onClick={submitcontrol}
          className='btn'>
              Add task
          </button>
        </form>
        <div className='flex data'>
          {/* this is the result part */}
          <h1 className='heading'>The tasks are given below</h1>
          <ul>
            {render_data}
          </ul>
        </div>
      </div>
    </>
  )
}

export default page