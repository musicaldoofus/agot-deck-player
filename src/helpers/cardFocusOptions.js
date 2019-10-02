const cardFocusOptions = [
    {
        label: 'marshal',
        availableCards: [
            'character',
            'location',
            'attachment'
        ],
        availablePhases: [
            'marshal'
        ],
        availableContext: [
            'hand'
        ]
    },
    {
        label: 'put into play',
        availableCards: [
            'character',
            'location'
        ],
        availablePhases: [
            'setup',
            'challenges',
            'domination'
        ],
        availableContext: [
            'hand',
            'discard',
            'dead'
        ]
    },
    {
        label: 'play',
        availableCards: [
            'event'
        ],
        availablePhases: [
            'plot',
            'draw',
            'marshal',
            'challenges',
            'domination',
            'taxation',
            'standing'
        ],
        availableContext: [
            'hand',
            'discard'
        ]
    },
    {
        label: 'discard',
        availableCards: [
            'character',
            'location',
            'attachment',
            'event'
        ],
        availablePhases: [
            'plot',
            'draw',
            'marshal',
            'challenges',
            'domination',
            'taxation',
            'standing'
        ],
        availableContext: [
            'hand'
        ]
    },
    {
        label: 'kneel',
        availableCards: [
            'character',
            'location'
        ],
        availablePhases: [
            'plot',
            'draw',
            'marshal',
            'challenges',
            'domination',
            'taxation',
            'standing'
        ],
        availableContext: [ //need a convention for this
            'inPlay'
        ]
    }
];

export default cardFocusOptions;