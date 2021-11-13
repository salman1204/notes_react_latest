import { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import { ModalContext } from '../contexts/ModalContext'
import { NoteListContext } from '../contexts/NoteListContext'
import ColorPicker from './ColorPicker'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%',
    width: '774px',
    height: '620px',
    border: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}

const NoteForm = () => {
  const { handleModalOpener } = useContext(ModalContext)
  const { addNotes } = useContext(NoteListContext)
  const [hasStar, setHasStar] = useState(false)

  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    hasStar: hasStar
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNotes(formValues)
  }

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={handleModalOpener}
        style={customStyles}
      >
        <div className=" d-flex row align-items-center justify-content-center m-0 p-3">
          <div className="d-flex justify-content-between mb-5 pt-3">
            <span></span>

            <AiOutlineClose style={{ cursor: 'pointer' }} />
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Note Title</Form.Label>
              <Form.Control
                required
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note Details</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="description"
                value={formValues.description}
                rows={3}
                onChange={handleChange}
                style={{ minHeight: '200px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Make this note star"
                name="hasStar"
                checked={hasStar}
                onChange={()=> {
                    formValues.hasStar = !hasStar
                    setHasStar(!hasStar);
                }}
              />
            </Form.Group>
            <div className="d-flex justify-content-between py-3">
              <ColorPicker handleChange={handleChange} />
              <Button variant="dark" type="submit" className="px-5">
                Create
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  )
}

export default NoteForm
