import IDrink from "../Drink/interfaces/IDrink";
import SoftDrink from "../Drink/SoftDrink";
import HotDog from "../Food/HotDog";
import IFoods from "../Food/interfaces/IFoods";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IfoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFoods {
        return new HotDog();
    }

}