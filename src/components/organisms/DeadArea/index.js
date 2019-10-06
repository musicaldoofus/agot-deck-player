import React from 'react';
import OutOfPlayArea from '../OutOfPlayArea';
import './DeadArea.css';

const DeadArea = (props) => {
    return (
        <OutOfPlayArea
            area="deadArea"
            {...props}
        />
    );
}

export default DeadArea;