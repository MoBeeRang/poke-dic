import './css/TodoTemplate.css'
function Pokedic({ children }) {
   return (
      <div className="TodoTemplate">
         <div className="app-title">포켓몬 도감</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default Pokedic
