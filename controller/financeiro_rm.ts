import {Passageiro} from "../controller/passageiro";
import {DAOPassageiro} from "../model/DAOPassageiro";

export class Financeiro{
	
	public daoPassageiro:DAOPassageiro;
	public listaDePassageirosDevedores:Array<Passageiro>;

	constructor() {
		this.daoPassageiro=new DAOPassageiro();
	}

	divideCustoPorN(){
		
	}

	divideCustoPorTaxi(){
		
	}

	add(){
		this.daoPassageiro.add({"nome":"paulo","celular":"99322128","divida":"10"});
		this.daoPassageiro.add({"nome":"Jose","celular":"99362128","divida":"15"});
		this.daoPassageiro.add({"nome":"Maria","celular":"99722128","divida":"8"});
		this.daoPassageiro.add({"nome":"Lucia","celular":"99822128","divida":"2"});
	}


	/*paga(id){
		this.daoPassageiro.atualiza("id=?",[id]);
	}*/

	listaPassageirosDevedores(){
		this.daoPassageiro.busca("divida>?",[0]);
		
		var self=this;
		var listaPassageiros=[];
		
		setTimeout(()=>{
		 var pesquisa=self.daoPassageiro.listaDePassageiros;
		 if(pesquisa.rows.length > 0) {
			for(var i = 0; i < pesquisa.rows.length; i++) {
				listaPassageiros.push(new Passageiro(pesquisa.rows.item(i).nome,pesquisa.rows.item(i).celular,pesquisa.rows.item(i).divida,pesquisa.rows.item(i).id));
			}
			self.listaDePassageirosDevedores=listaPassageiros;
	 	}else{
			self.listaDePassageirosDevedores=[new Passageiro(null,null)];
		}

		},400);
	}


}