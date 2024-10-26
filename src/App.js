import Pokedic from './components/Pokedic'
import PokeInsert from './components/PokeInsert'
import PokeList from './components/PokeList'
import React, { useState, useRef, useCallback } from 'react'
function App() {
   const [pokes, setPokes] = useState([
      {
         id: 1,
         name: '이상해씨',
         img: '/images/이상해씨.png',
         checked: false,
      },
      {
         id: 2,
         name: '파이리',
         img: '/images/파이리.png',
         checked: false,
      },
      {
         id: 3,
         name: '꼬부기',
         img: '/images/꼬부기.png',
         checked: false,
      },
   ])

   const nextId = useRef(4)

   //포켓몬 등록
   const onInsert = useCallback(
      (name) => {
         const poke = {
            id: nextId.current,
            name,
            img: '/images/' + name + '.png',
            checked: false,
         }
         setPokes(pokes.concat(poke))
         nextId.current += 1
      },
      [pokes]
   )

   //삭제, 이미지 로드에러시에도 실행됨.
   const onRemove = useCallback(
      (id) => {
         setPokes(
            pokes.filter((poke) => {
               return poke.id !== id
            })
         )
      },
      [pokes]
   )

   //더블클릭시 회색화면 토글기능
   const onToggle = useCallback(
      (id) => {
         const togglePokes = pokes.map((poke) => {
            return poke.id === id ? { ...poke, checked: !poke.checked } : poke
         })
         setPokes(togglePokes)
      },
      [pokes]
   )

   //진화리스트, 이 리스트에 없는 포켓몬은 진화하지 않는다.
   const nextGenList = [
      { level0: '꼬부기', level1: '어니부기', level2: '거북왕' },
      { level0: '피츄', level1: '피카츄', level2: '라이츄' },
      { level0: '파이리', level1: '리자드', level2: '리자몽' },
      { level0: '이상해씨', level1: '이상해풀', level2: '이상해씨' },
      { level0: '푸푸린', level1: '푸린', level2: '푸크린' },
      { level0: '나옹', level1: '페르시온' },
   ]

   //진화시키기. 진화리스트에 없는 포켓몬은 진화하지 않는다.
   const onNextGeneration = useCallback(
      (id) => {
         const nextPokes = pokes.map((poke, idx) => {
            let nextGenName = poke.name
            //해당 포켓몬의 다음 진화내용이 있으면 이름을 가져온다.
            if (poke.id === id) {
               for (let i = 0; i < nextGenList.length; i++) {
                  let genmap = nextGenList[i]
                  let getlistkeys = Object.keys(genmap)
                  for (let j = 0; j < getlistkeys.length; j++) {
                     if (genmap[getlistkeys[j]] === poke.name && j < getlistkeys.length - 1) {
                        nextGenName = genmap[getlistkeys[j + 1]]
                     }
                  }
               }
            }
            return poke.id === id ? { ...poke, name: nextGenName, img: '/images/' + nextGenName + '.png' } : poke
         })
         setPokes(nextPokes)
      },
      [pokes]
   )
   return (
      <Pokedic>
         <PokeInsert onInsert={onInsert} />
         <PokeList nextGenList={nextGenList} pokes={pokes} onRemove={onRemove} onToggle={onToggle} onNextGeneration={onNextGeneration} />
      </Pokedic>
   )
}

export default App
