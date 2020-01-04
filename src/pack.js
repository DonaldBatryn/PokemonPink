
class Pack {
    constructor(game) {
        this.game = game;
        this.pokemon = [];
        this.PC = [];
        this.items = {};
        this.stats = {
            'money': '',
            'time': (Date.now() - game.startTime) / 1000,
        }
    }

    addItem(item) {
        if (Object.keys(this.items).length === 20) {
            return 'Pack is full...'
        }
        if (!this.items[item.name]) {
            this.items[item.name] = [item];
        } else {
            this.items[item.name].push(item);
        }
        return `Picked up ${item.name} and put it in pack.`
    }

    addPokemon(pokemon) {
        if (this.pokemon.length === 6) {
            this.PC.push(pokemon);
            return `${pokemon.name} was sent to Bill's PC!`
        } else {
            this.pokemon.push(pokemon);
            return `${pokemon.name} was added to your party!`
        }
    }
}