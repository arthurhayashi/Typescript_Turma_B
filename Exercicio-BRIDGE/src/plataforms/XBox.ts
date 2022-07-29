import IConsole from "./IConsole";

export default class XBox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox: Console Pronto Para Jogar....")
       }
    
    configureGame(): void {
        this.authToken();
        console.log("XBox: Configurando o jogo..")
    }
    authToken(): void {
        console.log("XBox: inicializando console")
    }

}