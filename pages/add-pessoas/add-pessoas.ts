import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { Platform } from 'ionic-angular';

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
  pet: string = "add-banco";
  isAndroid: boolean = false;

  pessoaSelecionada: string;
  devedores;
  peopleAlertOpts: { title: string, subTitle: string };

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    platform: Platform
  ) {
      this.initializeItems();

      this.peopleAlertOpts = {
         title: 'Selecione o passageiro',
         subTitle: 'Qual passageiro deseja adicionar?'
      };

      this.isAndroid = platform.is('android');
  }

  stpSelect() {
    console.log('STP selected');
  }

  initializeItems() {
    this.devedores = [
      'José',
      'Maria',
      'Amanda',
      'José',
      'Maria',
      'Amanda',
      'Bruna',
      'Ana',
      'André',
      'Andréa'
    ];
  }

  ionViewDidLoad() {
    console.log('Hello AddPessoasPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.devedores = this.devedores.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
