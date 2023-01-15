import React from 'react'
import { ITask } from '../../types/task'
import Item from './Item'
import style from './List.module.scss'

interface Props {
  tasks: ITask[],
  selectTask: (taskSelected: ITask) => void
}

const List = ({ tasks, selectTask }: Props) => {

  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task) => (
          <Item
            selectTask={selectTask}
            key={task.id}
            {...task}
          />
        ))}

      </ul>
    </aside>
  )
}

export default List