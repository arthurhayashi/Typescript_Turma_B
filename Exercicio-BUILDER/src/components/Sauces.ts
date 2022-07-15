export default class Sauces{
 
    constructor(private _sauce :string){}

    get sauce():string{
        return this._sauce;
    }

    set sauce(value:string){
        this._sauce=value;
    }
}