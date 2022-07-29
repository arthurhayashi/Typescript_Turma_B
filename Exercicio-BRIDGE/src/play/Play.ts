import IConsole from "../plataforms/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{
   
    constructor(console:IConsole){
        
    }
    playing(): void {
        
        console.log("Jogando..")
    }
    result(): void {
        console.log("Resultado do jogo...")
    }
    
}