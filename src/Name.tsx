import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

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
    <div ref={drag} style={{ opacity }} data-testid={`box`} className='border-dashed border-[#767676] mr-6 mb-6 cursor-move float-left'>
      {name}
    </div>
  )
}

export default Name