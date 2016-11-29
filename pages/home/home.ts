import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Financeiro} from './../../controller/financeiro';
import {Passageiro} from '../../controller/passageiro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public nomes:Array<Passageiro>;
  public financeiro:Financeiro;


  constructor(public navCtrl: NavController) {
    this.financeiro =new Financeiro();    
  }

  paga(id){
      console.log(id);
     this.financeiro.paga(id);
     this.lista();
  }


  lista(){

    var self=this;
    this.financeiro.listaPassageirosDevedores();
    setTimeout(()=>{
      self.nomes=self.financeiro.listaDePassageirosDevedores;
      console.log(self.nomes[0].nome);
    },800);


  }


  add(){
    this.financeiro.add();
  }


}
