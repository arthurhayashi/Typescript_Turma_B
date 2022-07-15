import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../sanduiche/Sanduiche";

export default interface IBuilder{
    reset():void;
    getSanduiche():Sanduiche;
    setSanduicheType(value:SanduicheType);
    setBread(value:Bread);
    setProtein(value:Protein);
    setSalad(vaule:Salad);
    addSauces(value:Sauces);
}