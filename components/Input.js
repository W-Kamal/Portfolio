import { useRef } from 'react'

import { usePeopleStore } from '../api/store'

export default function Input() {
  const inputRef = useRef()
  const addPerson = usePeopleStore((state) => state.addPerson)

  const add = () => {
    if(inputRef.current.value) {
    addPerson(inputRef.current.value)
    inputRef.current.value = ''
    }
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add Person</button>
    </div>
  )
}