import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    Send(): void {
        console.log("Pacote sendo enviado via Transportadora...");
    }
    Recive(): void {
        console.log("Pacote foi recebido pela Transportadora");
    }

}