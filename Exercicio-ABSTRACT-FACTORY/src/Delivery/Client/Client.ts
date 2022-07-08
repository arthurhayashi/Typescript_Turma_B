import IDrink from "../Drink/interfaces/IDrink";
import IDeliveryFactory from "../Factories/interfaces/IDeliveryFactory";
import IFoods from "../Food/interfaces/IFoods";

export default class Client {
    private Food:IFoods;
    private Drink:IDrink;

    constructor(factory:IDeliveryFactory,Type:string){
        if(Type=="Drink"){
        this.Drink = factory.createDeliveryDrink();
        }else if(Type =="Food"){
        this.Food = factory.createDeliveryFood();
        }
    }

    startDelivery(){
        if(this.Drink){
        this.Drink.startDelivery();
        }else if(this.Food){
        this.Food.startDelivery();
        }
    }
}