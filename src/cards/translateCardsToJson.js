fs = require('fs');

var cardList = [];
var fileString = fs.readFileSync('base_raw', 'utf8');

for (let cardToken of fileString.split("\nnewcard\n")){
	var cardLines = cardToken.split('\n');
	let card;
	if (cardLines[1].search('Creature')){
		card = createCreature(cardLines);
	} else if (cardLines[1].search('Character')){
		card = createCharacter(cardLines);
	} else if (cardLines[1].search('Lesson')){
		card = createLesson(cardLines);
	} else if (cardLines[1].search('Adventure')){
		card = createAdventure(cardLines);
	} else if (cardLines[1].search('Spell')){
		card = createSpell(cardLines);
	} else if (cardLines[1].search('Location')){
		card = createLocation(cardLines);
	} else if (cardLines[1].search('Match')){
		card = createMatch(cardLines);
	} else if (cardLines[1].search('Item')){
		card = createItem(cardLines);
	}
	cardList.push(card);
}

function createCharacter(cardLines){}

function createAdventure(cardLines){}

function createCreature(cardLines){}

function createItem(cardLines){}

function createLesson(cardLines){}

function createLocation(cardLines){}

function createMatch(cardLines){}

function createSpell(cardLines){}
