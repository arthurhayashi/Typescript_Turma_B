import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
   constructor(){
    this.configureGame();
    console.log("PlayStation: Console Pronto Para Jogar....")
   }
   
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando o jogo..")
    }
    authToken(): void {
        console.log("PlayStation: inicializando console")
    }

}