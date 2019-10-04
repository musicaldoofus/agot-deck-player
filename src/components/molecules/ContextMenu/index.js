import React, { useEffect, createRef } from 'react';
import './ContextMenu.css';

const ContextMenu = (props) => {
    const containerRef = createRef();

    const windowClickListener = (e) => {
        if (!containerRef.current) {
            window.removeEventListener('window', windowClickListener);
            return;
        }
        if (!containerRef.current.contains(e.target)) props.handleClose();
    }

    useEffect(() => {
        window.addEventListener('click', windowClickListener);
    }, []);

    const posStyle = {
        top: props.pos.y,
        left: props.pos.x
    };
    const options = props.options.map(opt => (
        <div key={opt} className="context-menu-option">
            {opt}
        </div>
    ));
    return (
        <div ref={containerRef} className="context-menu-container" style={posStyle}>
            <div className="context-menu">
                {options}
            </div>
        </div>
    );
}

export default ContextMenu;