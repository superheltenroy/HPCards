fs = require('fs');

var cardList = [];
var fileString = fs.readFileSync('base_raw', 'utf8');
var set = 'Base Set';

for (let cardToken of fileString.split("\nnewcard\n")){
	let cardLines = cardToken.split('\n');
	let card;
	console.log(cardLines[1]);
	if (cardLines[1].search('Creature')>-1){
		card = createCreature(cardLines);
	} else if (cardLines[1].search('Character')>-1){
		card = createCharacter(cardLines);
	} else if (cardLines[1].search('Lesson')>-1){
		card = createLesson(cardLines);
	} else if (cardLines[1].search('Adventure')>-1){
		card = createAdventure(cardLines);
	} else if (cardLines[1].search('Spell')>-1){
		card = createSpell(cardLines);
	} else if (cardLines[1].search('Location')>-1){
		card = createLocation(cardLines);
	} else if (cardLines[1].search('Match')>-1){
		card = createMatch(cardLines);
	} else if (cardLines[1].search('Item')>-1){
		card = createItem(cardLines);
	}
	cardList.push(card);
	console.log(card);
}

function createCharacter(cardLines){
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = cardLines[1].split(' ')[0];
	card.type = cardLines[1].split(' ')[1].split('/')[0];
	card.descriptors = [];
	card.descriptors.push(cardLines[1].split(' ')[1].split('/')[1]);
	if(card.descriptors[0]){
		card.descriptors = card.descriptors.concat(cardLines[2].split('/'));
	}
	else{ 
		card.descriptors = (cardLines[2].split('/'));
	}
	let textIndex = 3;
	if (cardLines[3].search('Provides ')>-1){
		card.power = cardLines[3].split(' ')[1];
		textIndex = 4;
	}
	card.text = ''
	for (let i = textIndex; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;
}

function createAdventure(cardLines){
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = cardLines[1].split(' ')[0];
	card.type = cardLines[1].split(' ')[1].split('/')[0];
	card.text = ''
	for (let i = 2; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;
}

function createCreature(cardLines){
	console.log('creature');
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = cardLines[1].split(' ')[0];
	card.type = cardLines[1].split(' ')[1].split('/')[0];
	card.text = ''
	for (let i = 2; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;
}

function createItem(cardLines){}
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = cardLines[1].split(' ')[0];
	card.type = cardLines[1].split(' ')[1].split('/')[0];
	card.text = ''
	for (let i = 2; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;

function createLesson(cardLines){
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = 'Common';
	card.type = cardLines[1];
	card.text = ''
	for (let i = 2; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;
}

function createLocation(cardLines){
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = cardLines[1].split(' ')[0];
	card.type = cardLines[1].split(' ')[1].split('/')[0];
	card.text = ''
	for (let i = 2; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;
}

function createMatch(cardLines){
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = cardLines[1].split(' ')[0];
	card.type = cardLines[1].split(' ')[1].split('/')[0];
	card.text = ''
	for (let i = 2; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;
}

function createSpell(cardLines){
	let card = {};
	card.set = set;
	card.number = cardLines[0].split(' ')[0];
	card.name = cardLines[0].slice(card.number.length+1);
	card.rarity = cardLines[1].split(' ')[0];
	card.type = cardLines[1].split(' ')[1].split('/')[0];
	card.text = ''
	for (let i = 2; i<cardLines.length; i++){
		card.text += cardLines[i];
	}
	return card;
}
