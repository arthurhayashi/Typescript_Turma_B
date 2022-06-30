export default class Endereco{

    _rua:string;
    _numero:number;
    _cep:number;
    _bairro:string;
    _cidade:string;

    constructor(rua:string,numero:number,cep:number,bairro:string,cidade:string){
        this._rua=rua;
        this._numero=numero;
        this._cep=cep;
        this._bairro=bairro;
        this._cidade=cidade;
    }
    get rua(): string{
        return this._rua;
    }

    get numero(): number{
        return this._numero;
    }

    get cep(): number{
        return this._cep;
    }

    get bairro(): string{
        return this._bairro;
    }

    get cidade(): string{
        return this._cidade;
    }

    set cep(cep: number){
        this._cep = cep;
    }

    set bairro(bairro: string){
        this._bairro = bairro;
    }

    set cidade(cidade: string){
        this._cidade = cidade;
    } 
}
