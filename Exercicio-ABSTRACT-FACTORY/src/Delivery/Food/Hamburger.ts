import IFoods from "./interfaces/IFoods";

export default class Hamburger implements IFoods{
    startDelivery(): void {
        this.getFood();
        console.log("Hamburger:Iniciando entrega...");
    }
    getFood(): void {
        console.log("Hamburger:Preparando lanche!");
    }

}