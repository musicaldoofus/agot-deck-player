/*
write test:
(sampleDeckList) => (transformedDeck) === sampleDeck
*/

const sampleDeck = {
	faction: 'baratheon',
	agendaCard: {
		ci: null,
		claim: null,
		code: "14045",
		cost: null,
		deck_limit: 1,
		designer: null,
		faction_code: "neutral",
		faction_name: "Neutral",
		flavor: "",
		illustrator: "David Griffith",
		image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT52_45.jpg",
		income: null,
		initiative: null,
		is_intrigue: false,
		is_loyal: false,
		is_military: false,
		is_multiple: false,
		is_power: false,
		is_unique: false,
		label: "The Prince that was Promised",
		name: "The Prince that was Promised",
		octgn_id: "0177e855-929b-4d7c-b70c-ef96e285dd17",
		pack_code: "FotS",
		pack_name: "Fury of the Storm",
		position: 45,
		quantity: 3,
		reserve: null,
		si: -1,
		strength: null,
		text: "After all agendas are announced, name a unique character.\n\n\n\n\nOther characters you control cannot gain power.<b>Reaction:</b> After you win a [power] challenge by 5 or more STR, kneel your faction card to, either: stand the named character and draw a card; or, search your deck, discard pile,  and dead pile for the named character, reveal it, add it to your hand, and shuffle your deck.",
		traits: "Prophecy.",
		type_code: "agenda",
		type_name: "Agenda",
		url: "https://thronesdb.com/card/14045"
	},
	plotCards: {
		active: [
			{"pack_code":"Core","pack_name":"Core Set","type_code":"plot","type_name":"Plot","faction_code":"neutral","faction_name":"Neutral","position":1,"code":"01001","name":"A Clash of Kings","cost":null,"text":"<b>Reaction:</b> After you win a [power] challenge, move 1 power from the losing opponent's faction card to your own.","quantity":1,"income":4,"initiative":9,"claim":1,"reserve":6,"deck_limit":2,"designer":null,"strength":null,"traits":"Noble.","flavor":"","illustrator":"Smirtouille","is_unique":false,"is_loyal":false,"is_military":false,"is_intrigue":false,"is_power":false,"octgn_id":"de88edda-f5a4-4985-8ac1-2b8205c13416","is_multiple":false,"image_url":"http://lcg-cdn.fantasyflightgames.com/got2nd/GT01_1.jpg","url":"https://thronesdb.com/card/01001","label":"A Clash of Kings","ci":4,"si":9},
			{
				ci: 4,
				claim: 1,
				code: "10048",
				cost: null,
				deck_limit: 2,
				designer: null,
				faction_code: "neutral",
				faction_name: "Neutral",
				flavor: "",
				illustrator: "Niten",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT30_48.jpg",
				income: 4,
				initiative: 9,
				is_intrigue: false,
				is_loyal: false,
				is_military: false,
				is_multiple: false,
				is_power: false,
				is_unique: false,
				label: "Forced March",
				name: "Forced March",
				octgn_id: "b8bd47c7-8eff-44e6-87e1-c7fce3fd33b3",
				pack_code: "SoD",
				pack_name: "Sands of Dorne",
				position: 48,
				quantity: 3,
				reserve: 5,
				si: 9,
				strength: null,
				text: "<b>When Revealed:</b> Each opponent kneels 1 character he or she controls with a [military] icon. Then, you may kneel a character with a [military] icon to initiate this effect again.",
				traits: "Edict. War.",
				type_code: "plot",
				type_name: "Plot",
				url: "https://thronesdb.com/card/10048"
			},
			{
				ci: 5,
				claim: 1,
				code: "10049",
				cost: null,
				deck_limit: 2,
				designer: null,
				faction_code: "neutral",
				faction_name: "Neutral",
				flavor: "",
				illustrator: "Joshua Cairós",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT30_49.jpg",
				income: 5,
				initiative: 1,
				is_intrigue: false,
				is_loyal: false,
				is_military: false,
				is_multiple: false,
				is_power: false,
				is_unique: false,
				label: "Beyond Reproach",
				name: "Beyond Reproach",
				octgn_id: "ba9f1621-a451-4e1c-8906-5d4db2d3169f",
				pack_code: "SoD",
				pack_name: "Sands of Dorne",
				position: 49,
				quantity: 3,
				reserve: 4,
				si: 1,
				strength: null,
				text: "<b>When Revealed:</b> Each player sacrifices each attachment that is attached to a character he or she does not control.",
				traits: "The Seven.",
				type_code: "plot",
				type_name: "Plot",
				url: "https://thronesdb.com/card/10049"
			}
		],
		inactive: []
	},
	inPlay: {
		characters: [
			{
				ci: 4,
				claim: null,
				code: "14007",
				cost: 4,
				deck_limit: 3,
				designer: null,
				faction_code: "baratheon",
				faction_name: "House Baratheon",
				flavor: "\"Stannis Baratheon will never sit the Iron Throne. Is it treason to say the truth? A bitter truth, but no less true for that.\"",
				illustrator: "Chris Pritchard",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT52_7.jpg",
				income: null,
				initiative: null,
				is_intrigue: false,
				is_loyal: true,
				is_military: true,
				is_multiple: false,
				is_power: true,
				is_unique: true,
				label: "Alester Florent",
				name: "Alester Florent",
				octgn_id: "3a0e2ad3-3bd5-46e4-b1d0-f9fe55adf9d6",
				pack_code: "FotS",
				pack_name: "Fury of the Storm",
				position: 7,
				quantity: 3,
				reserve: null,
				si: 3,
				strength: 3,
				text: "<b>Reaction:</b> After a <i>House Florent</i> character enters play, draw a card. (Limit once per round.)<b>Interrupt:</b> When Alester Florent leaves play, if you control another <i>R'hllor</i> character, choose and kneel a character an opponent controls.",
				traits: "House Florent. Lord. R'hllor.",
				type_code: "character",
				type_name: "Character",
				url: "https://thronesdb.com/card/14007"
			},
			{
				ci: 4,
				claim: null,
				code: "12008",
				cost: 4,
				deck_limit: 3,
				designer: null,
				faction_code: "greyjoy",
				faction_name: "House Greyjoy",
				flavor: "",
				illustrator: "Tikos Peter",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT45_8.jpg",
				income: null,
				initiative: null,
				is_intrigue: false,
				is_loyal: false,
				is_military: true,
				is_multiple: false,
				is_power: false,
				is_unique: true,
				label: "Andrik the Unsmiling",
				name: "Andrik the Unsmiling",
				octgn_id: "8b975ac6-e968-4331-b22f-8cfd9fd6bbb1",
				pack_code: "KotI",
				pack_name: "Kings of the Isles",
				position: 8,
				quantity: 3,
				reserve: null,
				si: 5,
				strength: 5,
				text: "Pillage.<b>Reaction:</b> After Andrik the Unsmiling discards a card using pillage, choose a non-limited location or attachment in the losing opponent's discard pile. Discard 1 copy of that card from play.",
				traits: "Ironborn. Raider.",
				type_code: "character",
				type_name: "Character",
				url: "https://thronesdb.com/card/12008"
			},
			{
				ci: 4,
				claim: null,
				code: "14008",
				cost: 4,
				deck_limit: 3,
				designer: null,
				faction_code: "baratheon",
				faction_name: "House Baratheon",
				flavor: "\"A queen should be a mistress beneath her own roof.\"",
				illustrator: "Quintin Gleim",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT52_8.jpg",
				income: null,
				initiative: null,
				is_intrigue: true,
				is_loyal: false,
				is_military: false,
				is_multiple: true,
				is_power: true,
				is_unique: true,
				label: "Selyse Baratheon (FotS)",
				name: "Selyse Baratheon",
				octgn_id: "d4409b8a-fa7e-4903-be75-0ad4a11a7244",
				pack_code: "FotS",
				pack_name: "Fury of the Storm",
				position: 8,
				quantity: 3,
				reserve: null,
				si: 3,
				strength: 3,
				text: "Reduce the cost of each <i>R'hllor</i> attachment you marshal by 3.",
				traits: "House Florent. Lady. Queen. R'hllor.",
				type_code: "character",
				type_name: "Character",
				url: "https://thronesdb.com/card/14008"
			},
			{
				ci: 4,
				claim: null,
				code: "14009",
				cost: 4,
				deck_limit: 3,
				designer: null,
				faction_code: "baratheon",
				faction_name: "House Baratheon",
				flavor: "Griffin's Roost was strong but small...",
				illustrator: "Sebastian Rodriguez",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT52_9.jpg",
				income: null,
				initiative: null,
				is_intrigue: false,
				is_loyal: false,
				is_military: true,
				is_multiple: false,
				is_power: true,
				is_unique: false,
				label: "Griffin's Roost Knight",
				name: "Griffin's Roost Knight",
				octgn_id: "90bd96f1-1cff-4c63-872a-852d574c6d1c",
				pack_code: "FotS",
				pack_name: "Fury of the Storm",
				position: 9,
				quantity: 3,
				reserve: null,
				si: 4,
				strength: 4,
				text: "<b>Interrupt:</b> When the challenges phase ends, if you have not lost a [power] challenge this phase, stand Griffin's Roost Knight.",
				traits: "House Connington. Knight.",
				type_code: "character",
				type_name: "Character",
				url: "https://thronesdb.com/card/14009"
			},
			{
				ci: 3,
				claim: null,
				code: "14010",
				cost: 3,
				deck_limit: 3,
				designer: null,
				faction_code: "baratheon",
				faction_name: "House Baratheon",
				flavor: "\"Your son Dale will go south in Wraith, past Cape Wrath and the Broken Arm, all along the coast of Dorne as far as the Arbor.\" <cite>Stannis Baratheon</cite>",
				illustrator: "Sebastian Ciaffaglione",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT52_10.jpg",
				income: null,
				initiative: null,
				is_intrigue: false,
				is_loyal: true,
				is_military: true,
				is_multiple: false,
				is_power: true,
				is_unique: true,
				label: "Dale Seaworth",
				name: "Dale Seaworth",
				octgn_id: "dd4b77c4-b4bf-4c4a-9d13-d389d864f9e8",
				pack_code: "FotS",
				pack_name: "Fury of the Storm",
				position: 10,
				quantity: 3,
				reserve: null,
				si: 3,
				strength: 3,
				text: "<b>Reaction:</b> After you marshal Dale Seaworth, choose a [baratheon] location in your discard pile and return it to your hand.",
				traits: "Captain.",
				type_code: "character",
				type_name: "Character",
				url: "https://thronesdb.com/card/14010"
			}
		],
		locations: [
			{
				ci: 2,
				claim: null,
				code: "14042",
				cost: 2,
				deck_limit: 3,
				designer: null,
				faction_code: "neutral",
				faction_name: "Neutral",
				flavor: "\"A refuge where neither wolves nor lions come prowling.\" <cite>Lem Lemoncloak</cite>",
				illustrator: "Zach Graves",
				image_url: "http://lcg-cdn.fantasyflightgames.com/got2nd/GT52_42.jpg",
				income: null,
				initiative: null,
				is_intrigue: false,
				is_loyal: false,
				is_military: false,
				is_multiple: false,
				is_power: false,
				is_unique: true,
				label: "The Hollow Hill",
				name: "The Hollow Hill",
				octgn_id: "6cc24db7-8041-4693-b4e6-b4d9efbd3737",
				pack_code: "FotS",
				pack_name: "Fury of the Storm",
				position: 42,
				quantity: 3,
				reserve: null,
				si: -1,
				strength: null,
				text: "<b>Dominance Action:</b> If you control no loyal characters, kneel The Hollow Hill to search the top 10 cards of your deck for a non-loyal character, reveal it, and add it to your hand. Shuffle your deck.",
				traits: "Brotherhood. Westeros.",
				type_code: "location",
				type_name: "Location",
				url: "https://thronesdb.com/card/14042"
			}
		],
	},
	currentHand: [],
	drawDeck: [],
	deadPile: [],
	discardPile: []
}

export default sampleDeck;