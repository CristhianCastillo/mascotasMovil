import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pet-create',
  templateUrl: 'pet-create.html',
})
export class PetCreatePage {

  tipoMascotaAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    this.tipoMascotaAlertOpts = {
      title: 'Tipo Mascotas',
      subTitle: 'Selecciona'
    };
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Genial!!',
      message: 'Un amigo tuyo acaba de ser registrado.',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present()
  }

  stpSelect() {
    console.log('STP selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetCreatePage');
  }

}
