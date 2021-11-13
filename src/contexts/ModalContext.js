import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalContextProvider = (props) => {
  const [modal, setModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)

  const handleModalOpener = () => {
    setModal(!modal)
  }

  const handleUpdateModalOpener = () => {
    setUpdateModal(!updateModal)
  }

  return (
    <ModalContext.Provider value={{ modal, handleModalOpener, updateModal, handleUpdateModalOpener }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider