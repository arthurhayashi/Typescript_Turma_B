import Company from "./Delivery/Const/Company";
import IDeliveryFactory from "./Delivery/Factories/interfaces/IDeliveryFactory";
import AiquefomeDelivery from "./Delivery/Factories/AiquefomeDelivery";
import IfoodDelivery from "./Delivery/Factories/IfoodDelivery";
import Client from "./Delivery/Client/Client";
import Type from "./Delivery/Const/Type";

const currentCompany=Company.Aiquefome;
const currentType=Type.Food

let factory:IDeliveryFactory

switch(currentCompany){
    case Company.Aiquefome:
        factory=new AiquefomeDelivery()
    break;
    case Company.Ifood:
        factory=new IfoodDelivery()
    break;
    default:
        console.log("Escolha a Companhia")
    break;
}

const client = new Client(factory!,currentType!)
client.startDelivery();