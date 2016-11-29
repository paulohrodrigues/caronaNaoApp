import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-devedores',
  templateUrl: 'devedores.html'
})
export class DevedoresPage {
  devedores;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.initializeItems();
  }

  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Realmente deseja excluir?',
      message: 'Você removerá Maria da lista de devedores.',
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
    confirm.present()
  }

  inputSaldo() {
    let prompt = this.alertCtrl.create({
      title: 'Pagamento',
      message: "Digite o valor que receberá de Maria, ela deve R$ 5.00.",
      inputs: [
        {
          name: 'saldo',
          placeholder: '00.00'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Receber',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  initializeItems() {
    this.devedores = [
      'José',
      'Maria',
      'Amanda'
    ];
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
