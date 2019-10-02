import React, { Fragment } from 'react'
import UiCard from '../../atoms/UiCard';
import './Modal.css';

const Modal = (props) => {
    return (
        <Fragment>
            <div className="modal-bg"></div>
            <UiCard>
                <div className="close-btn" onClick={props.handleClose}>&times;</div>
                <div className="modal-display">
                    {props.children && props.children}
                </div>
            </UiCard>
        </Fragment>
    );
}

export default Modal;