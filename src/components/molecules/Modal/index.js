import React from 'react'
import UiCard from '../../atoms/UiCard';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className="modal-container">
            <UiCard
                className="modal-display-container"
            >
                <div className="close-btn hover-float" onClick={props.handleClose}>&times;</div>
                <div className="modal-display">
                    {props.children && props.children}
                </div>
            </UiCard>
            <div className="modal-bg"></div>
        </div>
    );
}

export default Modal;