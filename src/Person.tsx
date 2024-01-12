import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { useEffect, useState } from 'react';
import { Image, Layout, Typography } from 'antd';

interface DropResult {
  name: string
}

function Person({img, realName} : {img: string, realName: string}) {
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
    end: (_item, monitor) => {      
      const p = monitor.getDropResult<DropResult>();
      
      if (p && p.name)
        setName(p.name);
    },
    item: { name },
  }), [name])

  return (
    <Layout className='h-48 w-48 mr-6 mb-6 text-white p-4 text-center text-base float-left bg-black'>
      <div ref={drop}>
        <Image preview={false} width={100} src={img} />
        <Typography ref={drag} className='h-10 text-white'>
          {name}
        </Typography>
      </div>
    </Layout>
  )
}

export default Person