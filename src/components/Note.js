import { useContext } from 'react'
import { Col } from 'react-bootstrap'
import { AiFillStar, AiOutlineDelete } from 'react-icons/ai'
import { VscEdit } from 'react-icons/vsc'
import { ModalContext } from '../contexts/ModalContext'
import { NoteListContext } from '../contexts/NoteListContext'

const Note = ({note}) => {
    const {findNote} = useContext(NoteListContext)
    const {handleUpdateModalOpener} = useContext(ModalContext)

    return (
        <Col md={4} className="d-flex justify-content-center">
        <div
          className="todo__card__main mt-5 p-3 position-relative"
          style={{ backgroundColor: `${note.color}` }}
        >
          <div className="d-flex justify-content-between mb-2">
            <h5>
              <b>{note.title}</b>
            </h5>
            {note.hasStar && (
            <div className="p-2 d-inline-block rounded-circle icon__background">
              <AiFillStar color={`#FECD03`} size={25} />
            </div>
          )}
          </div>
          <div>{note.description}</div>
          <div className="position-absolute display-inline-flex bottom-0 mb-2 w-100">
            <div className="d-flex justify-content-between">
              <div>{note.date}</div>
              <div className="pe-4">
                <div className="d-inline-block pe-2">
                  <AiOutlineDelete
                    size={25}
                    // onClick={() => handelDeleteNote(item.id)}
                  />
                </div>
                <div
                  className="p-2 d-inline-block rounded-circle icon__background"
                  onClick={handleUpdateModalOpener}
                >
                  <VscEdit
                    color={`#FFFFFF`}
                    size={23}
                    onClick={() => findNote(note.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
}

export default Note;