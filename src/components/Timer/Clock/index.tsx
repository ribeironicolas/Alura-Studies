import React from 'react'
import style from './Clock.module.scss'

interface Props {
  time: number | undefined,
}

const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteDozens, minuteUnit] = String(minutes).padStart(2, '0')
  const [secondDozens, secondUnit] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.number}>{minuteDozens}</span> 
      <span className={style.number}>{minuteUnit}</span> 
      <span className={style.clockSplit}>:</span> 
      <span className={style.number}>{secondDozens}</span> 
      <span className={style.number}>{secondUnit}</span> 
    </>
  )
}

export default Clock