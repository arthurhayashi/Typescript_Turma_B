import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getingFull();
        console.log("Cerveja: Enviando pedido...");
    }
    getingFull(): void {
        console.log("Cerveja: Enchendo o Copo!");
    }

}