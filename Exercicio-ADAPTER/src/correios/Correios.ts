import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("O pacote foi enviado...");
    }
    reciveCorreios(): void {
        console.log("O pacote foi recebido!");
    }

}