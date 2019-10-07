import CARD_TYPES, { PHASE_TYPES, CONTEXT_TYPES } from './constants/cardTypeConstants';

const cardFocusOptions = [
    {
        label: 'marshal',
        availableCards: [
            CARD_TYPES.CHARACTER,
            CARD_TYPES.LOCATION,
            CARD_TYPES.ATTACHMENT
        ],
        availablePhases: [
            PHASE_TYPES.MARSHAL
        ],
        availableContext: [
            CONTEXT_TYPES.HAND
        ]
    },
    {
        label: 'put into play',
        availableCards: [
            CARD_TYPES.CHARACTER,
            CARD_TYPES.LOCATION
        ],
        availablePhases: [
            PHASE_TYPES.SETUP,
            PHASE_TYPES.CHALLENGES,
            PHASE_TYPES.DOMINATION
        ],
        availableContext: [
            CONTEXT_TYPES.HAND,
            CONTEXT_TYPES.DISCARD,
            CONTEXT_TYPES.DEAD_AREA
        ]
    },
    {
        label: 'play',
        availableCards: [
            CARD_TYPES.EVENT
        ],
        availablePhases: [
            PHASE_TYPES.allWithoutSetup
        ],
        availableContext: [
            CONTEXT_TYPES.HAND
        ]
    },
    {
        label: 'play from discard',
        availableCards: [
            CARD_TYPES.EVENT
        ],
        availablePhases: [
            PHASE_TYPES.allWithoutSetup
        ],
        availableContext: [
            CONTEXT_TYPES.DISCARD
        ]
    },
    {
        label: 'discard',
        availableCards: [
            CARD_TYPES.CHARACTER,
            CARD_TYPES.LOCATION,
            CARD_TYPES.ATTACHMENT,
            CARD_TYPES.EVENT
        ],
        availablePhases: [
            PHASE_TYPES.allWithoutSetup
        ],
        availableContext: [
            CONTEXT_TYPES.HAND
        ]
    },
    {
        label: 'kneel',
        availableCards: [
            CARD_TYPES.CHARACTER,
            CARD_TYPES.LOCATION
        ],
        availablePhases: [
            PHASE_TYPES.allWithoutSetup
        ],
        availableContext: [
            CONTEXT_TYPES.CHARACTER,
            CONTEXT_TYPES.LOCATION
        ]
    },
    {
        label: 'kill',
        availableCards: [
            CARD_TYPES.CHARACTER
        ],
        availablePhases: [
            PHASE_TYPES.allWithoutSetup
        ],
        availableContext: [
            CONTEXT_TYPES.CHARACTER
        ]
    },
    {
        label: 'choose plot',
        availableCards: [
            CARD_TYPES.PLOT
        ],
        availablePhases: [
            PHASE_TYPES.PLOT
        ],
        availableContext: [
            CONTEXT_TYPES.PLOT
        ]
    },
    {
        label: 'return to plot pile',
        availableCards: [
            CARD_TYPES.PLOT
        ],
        availableContext: [
            CONTEXT_TYPES.PLOT_DISCARD
        ],
        availablePhases: [
            PHASE_TYPES.all
        ]
    }
];

export default cardFocusOptions;