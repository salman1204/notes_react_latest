import { createContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { currentDateFinder } from '../helperFunctions/currentDateFinder'

export const NoteListContext = createContext()

const NoteListContextProvider = (props) => {
  const initialNote = JSON.parse(localStorage.getItem('noteLists')) || []

  const [noteLists, setNoteLists] = useState(initialNote)

  useEffect(() => {
    localStorage.setItem('noteLists', JSON.stringify(noteLists))
  }, [noteLists])

  const [editItem, setEditItem] = useState(null)

  // Add notes
  const addNotes = ({ title, description, hasStar, color }) => {
    setNoteLists([
      ...noteLists,
      {
        title,
        description,
        hasStar,
        color,
        id: uuid(),
        date: currentDateFinder(),
      },
    ])
  }

  // Find notes
  const findNote = (id) => {
    const item = noteLists.find((note) => note.id === id)
    setEditItem(item)
  }


  return (
    <NoteListContext.Provider value={{ addNotes, noteLists, findNote }}>
      {props.children}
    </NoteListContext.Provider>
  )
}

export default NoteListContextProvider
