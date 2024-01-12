import React, { useEffect, useState } from 'react'
import Person from './Person'
import Name from './Name'
import { Button, Typography } from 'antd';

const people = [
  {
    img: 'logo512.png',
    name: 'John',
  },
  {
    img: 'logo512.png',
    name: 'Jack',
  },
  {
    img: 'logo512.png',
    name: 'Jane',
  },
  {
    img: 'logo512.png',
    name: 'Joe',
  },
  {
    img: 'logo512.png',
    name: 'Jacob',
  },
  {
    img: 'logo512.png',
    name: 'Joseb',
  },
]
people.sort(() => 0.5 - Math.random());

function Game() {
  const [items, setItems] = useState(people.slice(0, 3));
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(true);
  const [level, setLevel] = useState(1);
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [time, isActive])

  useEffect(() => {
    people.sort(() => 0.5 - Math.random());
    setItems([]);
    setTime(30)
    let interval = setInterval(() => {
      setItems(people.slice(0, 3))
    }, 1)
    return () => clearInterval(interval)
  }, [level])

  return (
    <div>
      <Typography>{time}</Typography>
      <Button onClick={() => setLevel(level => level + 1)}>Next level</Button>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {items.map((person) => (
          <Person key={person.name} img={person.img} realName={person.name}/>
        ))}
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {items.map((name) => (
          <Name key={name.name} name={name.name} />
        ))}
      </div>
    </div>
  )
}

export default Game