import Beer from "../Drink/Beer";
import IDrink from "../Drink/interfaces/IDrink";
import Hamburger from "../Food/Hamburger";
import IFoods from "../Food/interfaces/IFoods";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IfoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFoods {
        return new Hamburger();
    }

}