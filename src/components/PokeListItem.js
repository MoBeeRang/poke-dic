import './css/TodoListItem.css'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'
import { FaArrowUp } from 'react-icons/fa'
import classnames from 'classnames'
function PokeListItem({ poke, onRemove, onToggle, onNextGeneration }) {
   const { id, name, img, checked } = poke

   return (
      <li className="TodoListItem">
         <div className="cardBorder" onDoubleClick={() => onToggle(id)}>
            <div className={classnames('checkbox', { checked })}>
               <img className="img" src={img} onError={() => onRemove(id)}></img>
            </div>
            <div className="name">{name}</div>
         </div>
         <div className="remove" onClick={() => onRemove(id)}>
            <button className="button">
               삭제하기
               <MdRemoveCircleOutline />
            </button>
         </div>
         <div className="change" onClick={() => onNextGeneration(id)}>
            <button className="button">
               진화하기
               <FaArrowUp />
            </button>
         </div>
      </li>
   )
}

export default PokeListItem
