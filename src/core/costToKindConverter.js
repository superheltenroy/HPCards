module.exports = function (card) {
    if(!card.cost)
        return false;
    letterCode = card.cost.slice(-1);
    switch(letterCode){
        case('T'): return 'Transmutation';
        case('C'): return 'Charms';
        case('P'): return 'Potions';
        case('F'): return 'Care of Magical Creatures';
        case('Q'): return 'Quidditch';
    }
    throw new Error("cost to kind conversion failed");
}