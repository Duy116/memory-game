import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { Card } from 'antd';

function Name({ name, isActive }: { name: string, isActive: boolean }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.NAME,
    item: { name },
    canDrag: () => {
      if (isActive)
        return true;
      else 
        return false;
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [isActive])

  const opacity = isDragging ? 0.4 : 1
  return (
    <Card ref={drag} style={{ opacity }} data-testid={`box`} className='border-[#000000] cursor-move float-left'>
      {name}
    </Card>
  )
}

export default Name