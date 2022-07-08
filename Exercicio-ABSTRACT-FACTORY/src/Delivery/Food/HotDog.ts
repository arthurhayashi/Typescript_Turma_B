import IFoods from "./interfaces/IFoods";

export default class HotDog implements IFoods{
    startDelivery(): void {
        this.getFood();
        console.log("Cachorro-Quente:Iniciando entrega...");
    }
    getFood(): void {
        console.log("Cachorro-Quente:Preparando lanche!");
    }

}