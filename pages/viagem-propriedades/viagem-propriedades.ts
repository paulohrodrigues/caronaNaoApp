import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViagemAddPessoasPage } from '../viagem-add-pessoas/viagem-add-pessoas';



@Component({
  selector: 'page-viagem-propriedades',
  templateUrl: 'viagem-propriedades.html'
})
export class ViagemPropriedadesPage {

  constructor(
    public navCtrl: NavController
  ){

  }

  openPage() {
    this.navCtrl.push(ViagemAddPessoasPage);
  }

}
