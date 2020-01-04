
class Pokemon {
    constructor(name, level, moves) {
        this.name = name;
        this.level = level;
        this.moves = moves;
        this.HP = this.level * 6.66;
    }

}

export default Pokemon;