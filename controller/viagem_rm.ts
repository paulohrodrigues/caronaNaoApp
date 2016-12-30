import {Passageiro} from './passageiro';
import {BD} from './bancoMgr';//O nome não precisa ser necessariamente este
export interface IViagem{
	//Atributos são privados
	//pontoDePartida:number;
	//destino:number;
	
	//medotos da interface
	embarcar(Passageiro):void;
	desembarcar(Passageiro):void;
	//addPassageiro(Passageiro):void;
	//excluirPassageiro(Passageiro):void;
	salvarViagemComoPredefinida():void;
	concluirViagem(devedores:Array<[string,number]>):void;
}

export class Viagem implements IViagem{
	
	//private _passageiros: Array<Passageiro>;
	
	private _id:number = null;
	private _destino=null;
	
	constructor(private _passageiros:Array<Passageiro>, private _pontoDePartida:number, private _qntsPassageirosTera:number, private _consumoCombustivel:number, private _valorCombustivel:number, private _tipoDeDivisao:number, id?:number){		
		this._id = id;
	}
	
	//Recebe um array de tuplas de numeros de telefone dos passageiros que ainda não pagaram e o quando ficou devendo
	//[celular, valor]
	//Então registra no banco à medida que vai desembarcando os que já pagaram
	private guardarDevedores(devedores:Array<[string,number]>){
		for (let dev in devedores) {
		   let cel = dev[0];
		   let divida = dev[1];
		   BD.BDPagamento(cel,divida);
		   this.desembarcarPorNum(cel);
		}
	}
	
	public embarcar(p:Passageiro){
		this._passageiros.push(p);
	}
	
	public desembarcar(p:Passageiro){
		
		let aRemover:number = this._passageiros.indexOf(p);
		
		this._passageiros.splice(aRemover, 1);
	}
	//Caso se tenha apenas o numero do passageiro
	private desembarcarPorNum(cel:string){
		for(let i = 0; i < this._passageiros.length; i++){
			if(this._passageiros[i].celular==cel){
			   this.desembarcar(this._passageiros[i]);
			   break;
			}
		}
		/*for (let p in this._passageiros) {
		   if(p.celular==cel){
			   this.desembarcar(p);
			   break;
		   }
		}*/
	}
	
	public salvarViagemComoPredefinida(){
		BD.BDViagemAtual(this);
	}
	public concluirViagem(devedores:Array<[string,number]>){
		//Desembarca os devedores registrando as suas dividas no banco de dados
		this.guardarDevedores(devedores);
		
		for(let i = 0; i < this._passageiros.length; i++){
			this.desembarcar(this._passageiros[i]);
		}
	}
	
	//Acessors
	/*set pontoDePartida(p:number){
		this._pontoDePartida = p;
	}*/
	get pontoDePartida():number{
		return this._pontoDePartida;
	}
	
	/*set destino(p: number){
		this._destino=p;
	}*/
	get destino():number{
		return this._destino;
	}
}