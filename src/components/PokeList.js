import './css/TodoList.css'
import PokeListItem from './PokeListItem'
function PokeList({ pokes, onRemove, onToggle, onNextGeneration }) {
   return (
      <ul className="TodoList">
         {pokes.map((poke) => (
            <PokeListItem poke={poke} key={poke.id} onRemove={onRemove} onToggle={onToggle} onNextGeneration={onNextGeneration} />
         ))}
      </ul>
   )
}

export default PokeList
