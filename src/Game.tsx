import React, { useEffect, useState } from 'react'
import Person from './Person'
import Name from './Name'
import { Button, Carousel, Typography, Image, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { shufflePeople } from './redux/people-slice';
import { addHighScores } from './redux/score-slice';

const totalTime = 30;

function Game() {
  const list = useAppSelector((state) => state.people.people)
  const score = useAppSelector((state) => state.score.score)
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(list.slice(0, 3));
  const [names, setNames] = useState(list.slice(0, 3).sort(() => 0.5 - Math.random()))
  const [time, setTime] = useState(totalTime);
  const [isActive, setIsActive] = useState(true);
  const [isGameOver, setIsGameOver] = useState(true);
  const [level, setLevel] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive && !isGameOver) {
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000);
    } 
    
    if (time === 0 && isActive) {
      setIsActive(false);
      setTimeout(handleNextLevel, 5000)
    }

    return () => clearInterval(interval)
  }, [time, isActive, isGameOver])

  useEffect(() => {
    dispatch(shufflePeople())
    setItems([])
    setTimeout(() => setItems(list.slice(0, 3)), 1)
    setNames(list.slice(0, 3).sort(() => 0.5 - Math.random()))
    setIsActive(true)
  }, [level, dispatch])

  const handleNextLevel = () => {
    dispatch(shufflePeople())
    setTime(totalTime)
    setIsActive(true)

    if (level < 10) {
      setLevel(level => level + 1)
    } else {
      dispatch(addHighScores({name: 'Player', score: score}))
      setLevel(1);
      setIsGameOver(true);
      setOpen(true);
    }
  }

  return (
    <div>
      <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
        <Typography className='text-center'>Your score is:</Typography>
        <Typography className='text-center'>{score}</Typography>
      </Modal>
      <div className='flex justify-around my-5'>
        <Typography>Time: {time}</Typography>
        <Typography>Score: {score}</Typography>
        <Typography>Level: {level}</Typography>
        {!isGameOver ? 
        <Button disabled={!isActive} onClick={() => {
            setIsActive(false)
            setTimeout(handleNextLevel, 5000)
          }}>Next level
        </Button> :
        <Button onClick={() => setIsGameOver(false)}>Play</Button>
        }
      </div>
      {!isGameOver ? 
      <>
        <div className='flex justify-around p-5'>
          {items.map((person) => (
            <Person key={person.name} img={person.img} realName={person.name} isCheck={!isActive}/>
          ))}
        </div>
        <div className='flex justify-evenly p-5'>
          {names.map((name) => (
            <Name key={name.name} name={name.name} isActive={isActive}/>
          ))}
        </div>
      </>
      :
      <div>
        <Typography className='text-center'>Meet the people</Typography>
        <Carousel dotPosition='top'>
          {list.map((item) => (
            <div className='p-5'>
              <Image className='ml-[520px]' width={200} src={item.img} draggable={false}/>
              <Typography className='flex justify-center'>
                {item.name}
              </Typography>
            </div>
          ))}
        </Carousel>
      </div>
      }
    </div>
  )
}

export default Game