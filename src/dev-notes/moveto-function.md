## Better method to move cards between areas

By area:

### <PlotDeck>

- I can move a card from <PlotDeck> to <PlotDeckUsed>

### <PlotDeckUsed>

- I can move a card from <PlotDeckUsed> to <PlotDeck>
- I can move all cards from <PlotDeckUsed> to <PlotDeck>

### <DrawPile>

(The areas above are determined by card type)
- I can move a card from <DrawPile> to <DiscardPile>
- I can move a card from <DrawPile> to <Hand>
- I can move multiple cards from <DrawPile> to <Hand>

### Hand

- I can move a character from <Hand> to <CharacterArea>
- I can move an attachment from <Hand> to <CharacterArea> after selecting a specific card
- I can move a card from <Hand> to <LocationArea>
- I can move a card from <Hand> to <DiscardPile>

### DiscardPile

- I can move a card from <DiscardPile> to <Hand>
- I can move a card from <DiscardPile> to <CharacterArea>
- I can move a card from <DiscardPile> to <LocationArea>

### CharacterArea

- I can move a card from <CharacterArea> to <DiscardPile>
- I can move a card from <CharacterArea> to <Hand>
- When a card moves from <CharacterArea> to anywhere else:
	- Attachments that are terminal and part of current deck move to <DiscardPile>
	- All other attachments go to <Hand>

### LocationArea

- I can move a card from <LocationArea> to <DiscardPile>
- I can move a card from <LocationArea> to <Hand>
- When a card moves from <LocationArea> to anywhere else:
	- Attachments that are terminal and part of current deck move to <DiscardPile>
	- All other attachments go to <Hand>