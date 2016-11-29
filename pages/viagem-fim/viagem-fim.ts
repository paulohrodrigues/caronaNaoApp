import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ViagemFim page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viagem-fim',
  templateUrl: 'viagem-fim.html'
})
export class ViagemFimPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello ViagemFimPage Page');
  }

  //Ler quilometragem
  doQuilometragem() {
    let prompt = this.alertCtrl.create({
      title: 'Quilometragem',
      message: "Qual a quilometragem atual do veículo?",
      inputs: [
        {
          name: 'title',
          placeholder: '00000'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Finalizar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
