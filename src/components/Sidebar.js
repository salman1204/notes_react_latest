import { useContext } from 'react'
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai'
import { ModalContext } from '../contexts/ModalContext'

const Sidebar = () => {
  const { handleModalOpener } = useContext(ModalContext)
  return (
    <div md={1} className="flex-column p-0 m-0 ">
      <div className="d-flex justify-content-center pt-4">
        <h6>
          <b>NOTEBOOK</b>
        </h6>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mt-4 p-2 d-inline-block rounded-circle icon__background">
          <AiFillStar size={25} color={'#FECD03'} />
        </div>
      </div>
      <div onClick={handleModalOpener} className="d-flex justify-content-center" >
        <div className="mt-3 p-2 d-inline-block rounded-circle icon__background">
          <AiOutlinePlus size={25} color={'#FFF'} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
