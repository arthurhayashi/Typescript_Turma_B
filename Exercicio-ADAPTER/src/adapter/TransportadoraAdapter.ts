import ICorreios from "../correios/ICorreios";
import Transportadora from "../Transportadora/Tranportadora";

export default class TransportadoraAdapter implements ICorreios{
    
    constructor(private trasnportadora: Transportadora){
        console.log("Adaptando Correios em Transportadora");
    }
    sendCorreios(): void {
        return this.trasnportadora.Send();
    }
    reciveCorreios(): void {
       return this.trasnportadora.Recive();
    }

}