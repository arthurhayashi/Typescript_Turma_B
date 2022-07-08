import IDrink from "../../Drink/interfaces/IDrink";
import IFoods from "../../Food/interfaces/IFoods";

export default interface IDeliveryFactory{
    createDeliveryDrink():IDrink;
    createDeliveryFood():IFoods;
}