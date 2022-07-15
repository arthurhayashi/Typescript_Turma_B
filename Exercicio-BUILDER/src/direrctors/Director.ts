import IBuilder from "../builder/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Director{
    constructor(private builder:IBuilder){}


    construcxSalada(){
        this.builder.setSanduicheType(SanduicheType.Hamburger);
        this.builder.setBread(new Bread("Brioche"));
        this.builder.setProtein(Protein.ANGUS);
        this.builder.setSalad(Salad.LETTUCE);
        this.builder.addSauces(new Sauces("Maionese"));
    }

    construcHoDog(){
        this.builder.setSanduicheType(SanduicheType.HotDog);
        this.builder.setBread(new Bread("HotDog"));
        this.builder.setProtein(Protein.HOTDOG);
        this.builder.setSalad(Salad.LETTUCE);
        this.builder.addSauces(new Sauces("Maionese"));
    }
}