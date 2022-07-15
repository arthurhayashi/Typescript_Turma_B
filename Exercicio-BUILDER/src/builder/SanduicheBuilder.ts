import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../sanduiche/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    
    reset(): void {
        this.sanduiche = new Sanduiche();
    }
    private sanduiche = new Sanduiche();
    getSanduiche(): Sanduiche {
       return this.sanduiche;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType=value;
    }
    setBread(value: Bread) {
        this.sanduiche.bread=value;
    }
    setProtein(value: Protein) {
        this.sanduiche.protain=value;
    }
    setSalad(vaule: Salad) {
        this.sanduiche.salad=vaule;
    }
    addSauces(value: Sauces) {
        this.sanduiche.addSauces(value);
    }
    
}