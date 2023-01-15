import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
import style from './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected)
    setTasks(previouTtasks => previouTtasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false,

    })))
  }

  function finishTask () {
    if(selected) {
      setSelected(undefined)
      setTasks(previouTtasks => previouTtasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask}/>
      <Timer 
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  )
}

export default App
