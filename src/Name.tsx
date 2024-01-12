import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

function Name({ name }: { name: string }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.NAME,
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ opacity }} data-testid={`box`} className='border-dashed border-[#767676] mr-6 mb-6 cursor-move float-left'>
      {name}
    </div>
  )
}

export default Name