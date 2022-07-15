import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";


export default class Sanduiche{
    private _sanduicheType : SanduicheType;
    private _bread:Bread;
    private _protain:Protein;
    private _salad:Salad;
    private _sauces:Sauces[]=[];


    get sanduicheType() : SanduicheType{
        return this._sanduicheType;
    }
    set sanduicheType(value:SanduicheType){
        this._sanduicheType=value;
    }
    get bread() : Bread{
        return this._bread;
    }
    set bread(value:Bread){
        this._bread=value;
    }

    get protain() : Protein{
        return this._protain;
    }
    set protain(value:Protein){
        this._protain=value;
    }
    get salad() : Salad{
        return this._salad;
    }
    set salad(value:Salad){
        this._salad=value;
    }
    addSauces(sauce:Sauces){
        this._sauces.push(sauce)
    }
    get sauces() : Sauces[]{
        return this._sauces;
    }
    get saucesTotal():number{
        return this._sauces.length;
    }
}