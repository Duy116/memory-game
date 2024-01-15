import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { useEffect, useState } from 'react';
import { Image, Layout, Typography } from 'antd';
import { useAppDispatch } from './redux/hook';
import { addScore } from './redux/score-slice';

interface DropResult {
  name: string
}

function Person({img, realName, isCheck} : {img: string, realName: string, isCheck: boolean}) {
  const dispatch = useAppDispatch();  
  const [name, setName] = useState('');

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.NAME,
    drop: (item) => {
      const p = item as DropResult
      setName(p.name)
      return { name: name }
    },
  }), [name])

  const [, drag] = useDrag(() => ({
    type: ItemTypes.NAME,
    canDrag: () => {
      if (name && !isCheck)
        return true;
      else 
        return false;
    },
    end: (_item, monitor) => {      
      const p = monitor.getDropResult<DropResult>();
      
      if (p)
        setName(p.name);
    },
    item: { name },
  }), [name])

  useEffect(() => {
    if (isCheck) {
      console.log(realName, name);
      
      if (realName === name) {
        dispatch(addScore(1))
      }
    }
  },[name, realName, isCheck, dispatch])

  const color = realName === name ? "green" : "red"

  return (
    <Layout className='h-48 w-48 mr-6 mb-6 text-white p-4 text-center text-base float-left bg-black'>
      <div ref={drop}>
        <Image preview={false} width={100} src={img} draggable={false}/>
        <Typography ref={drag} className='h-10 text-white'>
          {name}
        </Typography>
        {isCheck ? <Typography style={{ color: color }} >{realName}</Typography> : <></>}
      </div>
    </Layout>
  )
}

export default Person