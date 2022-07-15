export default class Bread{
    constructor(private _breadType :string){}

    get breadType():string{
        return this._breadType;
    }

    set breadType(value:string){
        this._breadType=value;
    }
}