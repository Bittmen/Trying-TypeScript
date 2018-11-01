class GameConsoles{

    private Xbox: Array<string>;
    private PS: Array<string>;
    private Nintendo: Array<string>;

    constructor(Xbox, PS, Nintendo){
        this.Xbox = Xbox;
        this.PS = PS;
        this.Nintendo = Nintendo;
    }

    public setGames(Xbox){
        this.Xbox = Xbox;
    }
    public getGames(){
        return this.Xbox;
    }

}

var games = new GameConsoles(["Halo","GTA5","GOW"],[""],[""]);
console.log(games);

console.log(games.setGames("Otro"))
