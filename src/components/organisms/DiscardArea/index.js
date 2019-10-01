import React, { useState } from 'react';

const DiscardArea = (props) => {
    const [discard, setDiscard] = useState(props.cards);
    return (
        <div onClick={props.handleDraw} className="discard-pile">
            <div className="card-btn card-btn-hidden">
                
            </div>
        </div>
    )
}

export default DiscardArea;