# Deck player
## For A Game of Thrones Living Card Game, 2nd edition

***Note: this project, its Github page, and any associated artifacts or files are in no way connected to or in partnership with Fantasy Flight Games.

Demo can be found [here]().

### API methods from [thronesdb](thronesdb.com)

- GET card
- GET decklist

### Summary of components

***Atoms
*Definition: stateless, functional components with singular purpose and/or display
- Card
- TokenButton

***Molecules
*Definition: collection of atoms or function(s) that govern a simple purpose and/or display
- CardList
- HUD

***Organisms
*Definition: collection of molecules or stateful classes that govern how information should be displayed and events handled
- GameBoard
- BoardArea

***Pages
*Definition: sets of Routes and components to display
- Root
- Play

### Dev notes - example structure

Root(routes)
.> Page({title: 'Play'})
..> GameBoard({deckList})
...> HUD
....> TokenButton
...> BoardArea({label: 'plot deck'})
....> CardList({cards: GameBoard.deck.plotCardList.active})
.....> Card(props)
.....> Card(props)
...> BoardArea({label: 'used plot cards'})
....> CardList({cards: GameBoard.deck.plotCardList.inactive})
.....> Card(props)
.....> Card(props)
...> BoardArea({label: 'hand'})
....> CardList({cards: GameBoard.deck.currentHand})
.....> Card(props)
.....> Card(props)
...> BoardArea({label: 'characters'})
....> CardList({cards: GameBoard.deck.inPlay.characters})
.....> Card(props)
.....> Card(props)
...> BoardArea({label: 'locations'})
....> CardList({cards: GameBoard.deck.inPlay.locations})
.....> Card(props)
.....> Card(props)

### Dev notes - basic play setup actions

Get deck
`

Get individual card (e.g., for displaying a faction or agenda card)
`

Shuffle deck
`

### Dev notes - basic user actions

View a play area (locations, characters) in full screen
`(BoardArea) => (handleFullscreenToggle) => (BoardArea.setState({isFullscreen: !state.isFullscreen})) => (BoardArea.render())

Kneel a card (default click option for all cards in a CardList - simply update className and status in Card props)
`(CardList) => (Card({code})) => (onClick(Card.props.code)) => (CardList.handleKneelCard(Card.props.code)) => (CardList.setState({})) => (CardList.render())

View a single card in fullscreen (not sure which design is best for this - may have to handle this via button on card as default onClick is to kneel)
`(CardList) => (Card({code})) => (Card.handleFullscreenToggle(Card.props.code)) => (CardList.handleFullscreenToggle(Card.props.code)) => (CardList.setState({focusCard})) => (CardList.render()) => (CardViewer(Card.props.code)) => (Card(card.props.code, key={card.props.code+'inCardViewer'})) => (onClick) => (handleDismiss)

Add a token (poison marker, gold, etc.) to a card (needs updating based on component structure)
`(GameBoard) => (TokenButton(tokenType)) => (TokenButton.onClick(tokenType)) => (CardList.handleClickToken(tokenType)) => (CardList.handleTokenAction(tokenType, tokenAction, tokenTarget)) => (CardList.handlePushToken(cardCode, tokenType)) => (CardList.setState({cards: this.state.cards[code].props.tokens[tokenType].concat(token)})) => (CardList.render())

Draw an individual card
`(DrawDeck) => (DrawDeck.handleDrawCard) => (DrawDeck.setState({viewCard})) => (DrawDeck.render()) => (CardViewer(cardCode)) => (Card(cardCode)) => (Card.onClick) => (CardViewer.handleDismiss)

View cards in hand
`(GameBoard) => (GameBoard.handleDisplayHandCards()) => (GameBoard.setState({fullscreenArea: }))

Discard a card from hand
`(BoardArea) => (CardList({cards: cardsFromDeck.

View Discard deck
`(DiscardDeck) => (DiscardDeck.onClick) => (DiscardDeck.setState({isFullscreen})) => (DiscardDeck.render()) => (CardList({cards: DiscardDeck.props.cards}))


`(DiscardDeck) => (ViewMoreButton) => (setVisibleCards) => see more cards in list


`(HandCardsButton) => (onClick) => view hand


`(CardList) => (ViewMoreButton) => (setVisibleCards) => see more cards in list


`(BoardArea) => (ViewMoreButton) => (setVisibleCards) => 

*For future - not using until mobile-ready in React Native
`(DrawDeck) => (onLongPress) => draw multiple cards (i.e. long press on deck => (accept num from user) => return cards)

### Credits

thronesdb.com
theironthrone.net