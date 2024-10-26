import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import React, { useState, useCallback } from 'react'

function PokeInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = useCallback((e) => {
      setValue(e.target.value)
   }, [])
   const onSubmit = useCallback(
      (e) => {
         onInsert(value)
         setValue('')
         e.preventDefault()
      },
      [value, onInsert]
   )
   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="추가 할 포켓몬명을 입력하세요." value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default PokeInsert
