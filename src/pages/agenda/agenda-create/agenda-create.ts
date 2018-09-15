import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-agenda-create',
  templateUrl: 'agenda-create.html',
})
export class AgendaCreatePage {

  tipoActividadAlertOpts: { title: string, subTitle: string };
  nombreMascota: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    this.tipoActividadAlertOpts = {
      title: 'Tipo Actividad',
      subTitle: 'Selecciona'
    };

    this.nombreMascota = this.navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaCreatePage');
  }

  stpSelect() {
    console.log('STP selected');
  }


  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Evento Agendado',
      message: 'Exitoso!!',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present()
  }
}
