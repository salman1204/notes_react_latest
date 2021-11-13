import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NoteLists from './components/NoteLists'
import Sidebar from './components/Sidebar'
import { ModalContext } from './contexts/ModalContext'

function App() {
  const {modal} = useContext(ModalContext)
  return (
    <Container fluid>
      <Row>
        <Col md={1} className="border-end min-vh-100">
          <Sidebar />
        </Col>
        <Col>
          <Header />
          <NoteLists />
        </Col>
      </Row>
      {modal && <NoteForm type="create"/>}
    </Container>
  )
}

export default App
