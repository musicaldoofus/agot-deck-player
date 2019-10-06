import React, { useEffect, createRef } from 'react';
import './ContextMenu.css';

const ContextMenu = (props) => {
    const containerRef = createRef();

    useEffect(() => {
        const windowClickListener = (e) => {
            if (!containerRef.current) {
                window.removeEventListener('window', windowClickListener);
                return;
            }
            if (!containerRef.current.contains(e.target)) props.handleClose();
        }
        window.addEventListener('click', windowClickListener);
    }, [containerRef, props]);

    const posStyle = {
        top: props.pos.y,
        left: props.pos.x
    };
    return (
        <div ref={containerRef} className="context-menu-container" style={posStyle}>
            <div className="context-menu">
                {props.options ? props.options.map(opt => (
                    <div key={opt} className="context-menu-option">
                        {opt}
                    </div>
                )) : props.children
                }
            </div>
        </div>
    );
}

export default ContextMenu;