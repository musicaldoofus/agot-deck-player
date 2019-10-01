import React from 'react';

const DiscardArea = (props) => {
    return (
        <div onClick={props.handleDraw} className="discard-pile">
            Discard Area
            <div className="card-btn card-btn-hidden">
                
            </div>
        </div>
    )
}

export default DiscardArea;