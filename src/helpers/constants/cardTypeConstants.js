const CARD_TYPES = {
    CHARACTER: 'character',
    LOCATION: 'location',
    EVENT: 'event',
    ATTACHMENT: 'attachment',
    PLOT: 'plot',
    FACTION: 'faction',

    get all() {
        return [
            this.CHARACTER,
            this.LOCATION,
            this.EVENT,
            this.ATTACHMENT,
            this.PLOT,
            this.FACTION
        ];
    }
}

const CONTEXT_TYPES = {
    CHARACTER: 'character',
    LOCATION: 'location',
    HAND: 'hand',
    DISCARD: 'discard', //confirm - may be discardArea (try to flatten these issues)
    PLOT: 'plot',
    PLOT_DISCARD: 'plotDiscard',
    DRAW_AREA: 'drawPileArea', //no idea - hasn't been implemented yet
    FACTION_AREA: 'factionArea', //confirm
    DEAD_AREA: 'dead', //confirm

    get all() {
        return [
            this.CHARACTER,
            this.LOCATION,
            this.HAND,
            this.DISCARD,
            this.PLOT,
            this.PLOT_DISCARD,
            this.DRAW_AREA,
            this.FACTION_AREA,
            this.DEAD_AREA
        ]
    }
}

const PHASE_TYPES = {
    SETUP: 'setup',
    PLOT: 'plot',
    DRAW: 'draw',
    MARSHAL: 'marshal',
    CHALLENGES: 'challenges',
    DOMINATION: 'domination',
    TAXATION: 'taxation',
    STANDING: 'standing',

    get all() {
        return [
            this.SETUP,
            this.PLOT,
            this.DRAW,
            this.MARSHAL,
            this.CHALLENGES,
            this.DOMINATION,
            this.TAXATION,
            this.STANDING
        ];
    },

    get allWithoutSetup() {
        return this.all.filter(phase => phase !== this.SETUP);
    }
}

export default CARD_TYPES;
export { PHASE_TYPES, CONTEXT_TYPES };