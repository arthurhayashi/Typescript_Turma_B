import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getingFull();
        console.log("Refrigerante: Enviando pedido...");
    }
    getingFull(): void {
        console.log("Refrigerante: Enchendo o Copo!");
    }

}