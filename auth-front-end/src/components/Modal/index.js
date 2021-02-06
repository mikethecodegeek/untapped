
import React, {useState} from 'react';
import Modal from 'react-modal';
import { useSelector } from "react-redux";
import CheckinPage from '../CheckinPage'
import './modal.css'


function ModalComponent ({id}){
    const sessionUser = useSelector((state) => state.session.user);
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    if (!sessionUser) return null;

    return(
        <>

            <button className='checkinButton' onClick={setModalIsOpenToTrue}>Checkin</button>

            <Modal isOpen={modalIsOpen}>
            <div className='modalTop'>
                <button className='btn-close' onClick={setModalIsOpenToFalse}>x</button>
            </div>
                <CheckinPage id={id} closeModal={setModalIsOpenToFalse} />
            </Modal>
        </>
    )
}
export default ModalComponent;