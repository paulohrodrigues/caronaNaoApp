import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DAOPassageiro } from '../../model/DAOPassageiro';

@Component({
  selector: 'page-devedores',
  templateUrl: 'devedores.html'
})
export class DevedoresPage {
  devedores;
  db:DAOPassageiro;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.db=new DAOPassageiro();
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
    return new Promise((resolve)=>{
      this.db.busca("1=?",[1]).then((pesquisa)=>{
      
        this.devedores = [
        ];

        if(pesquisa.rows.length > 0) {
          for(var i = 0; i < pesquisa.rows.length; i++) {
            this.devedores.push({
              nome:pesquisa.rows.item(i).nome,
              celular:pesquisa.rows.item(i).celular,
              divida:pesquisa.rows.item(i).divida
            });
          }
          resolve(true);
        }

      });
    });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems().then(()=>{

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.devedores = this.devedores.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    });
  }
}
