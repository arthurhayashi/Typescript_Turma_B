import IConsole from "../plataforms/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console1:IConsole){
        super(console1);
    }

    chalange():void{
        console.log("#####Configurações Avancçadas####");
        console.log("Modo Desafio Ativado");
    }
}