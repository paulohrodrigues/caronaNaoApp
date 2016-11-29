import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';

/*
  Generated class for the AddPessoas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-pessoas',
  templateUrl: 'add-pessoas.html'
})
export class AddPessoasPage {
  pessoaSelecionada: string;
  devedores;
  peopleAlertOpts: { title: string, subTitle: string };

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {
      this.initializeItems();

      this.peopleAlertOpts = {
         title: 'Selecione o passageiro',
         subTitle: 'Qual passageiro deseja adicionar?'
      };
  }

  stpSelect() {
    console.log('STP selected');
  }

  initializeItems() {
    this.devedores = [
      'José',
      'Maria',
      'Amanda'
    ];
  }

  ionViewDidLoad() {
    console.log('Hello AddPessoasPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
