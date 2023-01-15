import React, { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form = ({ setTasks }: Props) => {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  function handleAddTask (e: React.FormEvent) {
    e.preventDefault()    
    setTasks(oldTask => [... oldTask, 
      { 
        task,
        time,
        selected: false, 
        completed: false,
        id: uuidv4()
      }])
      setTask("")
      setTime('00:00')
  }

  return (
    <form className={style.newTask} onSubmit={handleAddTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new topic</label>
        <input 
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="What do you want to study"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input 
          type="time" 
          step="1"
          name="time"
          value={time}
          onChange={ e => setTime(e.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
        <Button type='submit'>Add</Button>
    </form>
  )
}

export default Form