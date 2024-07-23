"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState()
  const [desc, setdesc] = useState()
  const [MainTask, setMainTask] = useState([])
  const submitHandler = (e)=>{
     e.preventDefault()
     
     setMainTask([...MainTask,{title,desc}])


     settitle("")
     setdesc("")
  }

  const deleteHandler = (i)=>{
    let copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }


  let randerTask = <h2>No Task Available</h2>

  if (MainTask.length>0) {
    randerTask = MainTask.map((t, i)=>{
      return (
      <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium mb-5'>{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-500 text-white rounded
      font-bold px-4 py-2'>Delete</button>
      </li>
      )
    })
    
  }

  return (
    
    <>
    <h1 className='bg-black text-white
    p-5 text-2xl font-bold text-center'>My Todo List</h1>

    <form onSubmit={submitHandler}>
      <input type="text" className='border-zinc-800 border-4 text-2xl
       m-8 px-4 py-2 rounded'
       placeholder='Enter task here...'
       value={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }}
       ></input>
       <input type="text" className='border-zinc-800 border-4 text-2xl
       m-8 px-4 py-2 rounded'
       placeholder='Enter description here...'
       value={desc}
       onChange={(e)=>{
            setdesc(e.target.value)
       }}
       ></input>
       <button className='bg-black text-white
       px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr/>
    <div className='p-5 bg-slate-200'>
      <ul>
        {randerTask}
      </ul>
    </div>
    </>
    

)
}

export default page