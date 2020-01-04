
class Pokemon {
    constructor(name, type, level, moves) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.moves = moves;
        this.HP = this.level * 6.66;
    }

}

export default Pokemon;