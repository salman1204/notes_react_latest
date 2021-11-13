import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { NoteListContext } from '../contexts/NoteListContext'
import Note from './Note'

const NoteLists = () => {
  const { noteLists } = useContext(NoteListContext)

  return (
    <Row className="p-5 ">
      <Row>
        <div className="d-flex flex-wrap justify-content-start">
          {noteLists && noteLists.length ? (
            noteLists.map((note) => {
              return <Note note={note} key={note.id} />
            })
          ) : (
            <div>No notes</div>
          )}
        </div>
      </Row>
    </Row>
  )
}

export default NoteLists
