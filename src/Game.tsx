import React, { useEffect, useState } from 'react'
import Person from './Person'
import Name from './Name'
import { Button, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { shufflePeople } from './redux/people-slice';

const totalTime = 5;

function Game() {
  const list = useAppSelector((state) => state.people.people)
  const score = useAppSelector((state) => state.score.score)
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(list.slice(0, 3));
  const [time, setTime] = useState(totalTime);
  const [isActive, setIsActive] = useState(true);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000);
    } 
    
    if (time <= 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval)
  }, [time, isActive])

  useEffect(() => {
    dispatch(shufflePeople())
    setItems(list.slice(0, 3))   
    if (level > 10) {
      setLevel(1);
    }
  }, [level, list, dispatch])

  return (
    <div>
      <div className='flex justify-between'>
        <Typography>Time: {time}</Typography>
        <Typography>Score: {score}</Typography>
        <Typography>Level: {level}</Typography>
        <Button onClick={() => {
          setItems([])   
          setTime(totalTime)
          setIsActive(true)
          setLevel(level => level + 1)
        }}>Next level</Button>
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {items.map((person) => (
          <Person key={person.name} img={person.img} realName={person.name} isCheck={!isActive}/>
        ))}
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {items.map((name) => (
          <Name key={name.name} name={name.name} isActive={isActive}/>
        ))}
      </div>
    </div>
  )
}

export default Game