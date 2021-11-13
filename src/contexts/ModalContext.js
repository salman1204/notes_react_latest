import React, { createContext, useContext, useState } from 'react'
import { NoteListContext } from './NoteListContext'

export const ModalContext = createContext()

const ModalContextProvider = (props) => {
  const [modal, setModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const {removeEditNote} = useContext(NoteListContext)

  const handleModalOpener = () => {
    setModal(!modal)
  }

  const handleUpdateModalOpener = () => {
    setUpdateModal(!updateModal)
  }

  const handleCloseUpdateModal = () => {
    setUpdateModal(false)
    removeEditNote()
  }

  return (
    <ModalContext.Provider value={{ modal, handleModalOpener, updateModal, handleUpdateModalOpener, handleCloseUpdateModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider