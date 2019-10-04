import React, { useState } from 'react';
import Card from '../../atoms/Card';
import './FactionArea.css';

const FactionArea = (props) => {
    const agendaCard = props.cards.filter(card => card.type_code === 'agenda')[0];
    const factionCard = ''; //get from ~/helpers; use faction from gameState

    const [focusCardKey, setFocusCardKey] = useState(agendaCard ? agendaCard.cardKey : factionCard.cardKey);

    return (
        <div className="faction-area">
            <div className="border" id="Agenda">
                {agendaCard && (
                    <div onClick={() => setFocusCardKey(agendaCard.cardKey)} className={`agenda-card${focusCardKey === agendaCard.cardKey ? ' focus' : ''}`}>
                        <Card
                            card={agendaCard}
                        />
                    </div>
                )}
                <div onClick={() => setFocusCardKey(factionCard.cardKey)} className={`faction-card${focusCardKey === factionCard.cardKey ? ' focus' : ''}`}>
                    <Card
                        card={factionCard}
                    />
                </div>
            </div>
        </div>
    );
}

export default FactionArea;