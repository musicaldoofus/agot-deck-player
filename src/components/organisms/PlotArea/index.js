import React from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';
import InnerModal from '../InnerModal';

const PlotArea = (props) => {
    const plotAreaInner = () => (
        <InnerModal
            {...props}
            context="plot"
            handleCardMove={props.handleCardMove}
            handleModalDismiss={() => props.handleModalToggle(null)}
        />
    );
    return (
        <div className="plot-area">
            <div className="border" id={`Plot(${props.cards.length})`}>
                {props.cards.length > 0 ? (
                    <Card
                        isBackside
                        isLandscape
                        onClick={() => props.handleModalToggle(plotAreaInner)}
                    />
                ) : (
                    <NoCards isLandscape/>
                )}
            </div>
        </div>
    );
}

export default PlotArea;