// Interface indica todos los metodos que nuestra clase tendrá
interface allThings{
    setGames(Xbox);
    getGames();
}

function accesorios(item: string){
    return function(target:Function){
        target.prototype.compra = function(): void{
            console.log("He compado "+ item);
        }
    }
}

class GameConsoles implements allThings{

    //Propiedades
    private Xbox: Array<string>;
    private PS: Array<string>;
    private Nintendo: Array<string>;

    //Metodos
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

console.log(games.setGames("Otro"));

class GamesPortables extends GameConsoles{

    public PSP: Array<string>;
    public NDS: Array<string>;

    setGames(PSP){
        this.PSP = PSP;
    }
    getGames(){
        return this.PSP;
    }
}

var gamesPort = new GamesPortables([""],[""],[""]);
gamesPort.setGames("GOWW");
