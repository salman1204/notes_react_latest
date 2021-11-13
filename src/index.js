import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ModalContextProvider from './contexts/ModalContext'
import NoteListContextProvider from './contexts/NoteListContext'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <NoteListContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </NoteListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
