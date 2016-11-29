import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

import { AddPessoasPage } from '../add-pessoas/add-pessoas';

/*
  Generated class for the ViagemAddPessoas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viagem-add-pessoas',
  templateUrl: 'viagem-add-pessoas.html'
})
export class ViagemAddPessoasPage {
  devedores;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.initializeItems();
  }

  insertPessoa() {
    let modal = this.modalCtrl.create(AddPessoasPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('Hello ViagemAddPessoasPage Page');
  }

  initializeItems() {
    this.devedores = [
      'José',
      'Maria',
      'Amanda'
    ];
  }

  doPredefinida() {
    let confirm = this.alertCtrl.create({
      title: 'Deseja salvar a viagem?',
      message: 'A viagem será salva como viagem predefinida.',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Realmente deseja excluir?',
      message: 'Você removerá Maria da viagem.',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
