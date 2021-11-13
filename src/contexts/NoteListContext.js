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

  // Delete notes
  const handelDeleteNote = id => {
    setNoteLists(noteLists.filter(note => note.id !== id))
  }

  // remove Find Note 
  const removeEditNote = () => {
    setEditItem(null)
  }
  // Edit task
  const editNote = ({title, description,hasStar, color, id}) => {
  
    const newNotes = noteLists.map((note) =>
      (note.id === id ? { title, description,hasStar, color, id, date:currentDateFinder()} : note)
    )
    setNoteLists(newNotes)
    setEditItem(null)
  }

  return (
    <NoteListContext.Provider
      value={{ addNotes, noteLists, findNote, editItem, editNote, removeEditNote, handelDeleteNote }}
    >
      {props.children}
    </NoteListContext.Provider>
  )
}

export default NoteListContextProvider
