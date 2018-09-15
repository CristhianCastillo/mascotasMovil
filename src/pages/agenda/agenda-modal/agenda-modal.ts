import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-agenda-modal',
  templateUrl: 'agenda-modal.html',
})
export class AgendaModalPage {
  cita: any;
  nombreMascota: string;
  nombreEvento: String;
  ubicacion: String;
  tipoActividad: String;
  fecha: string;
  hora: string;
  descripcionActividad: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    this.cita = this.navParams.get("cita");
    console.log(this.cita.nombreEvento);
    this.nombreEvento = this.cita.nombreEvento;
    this.ubicacion = this.cita.ubicacion;
    this.tipoActividad = this.cita.tipoActividad;
    this.fecha = this.cita.fecha;
    this.hora = this.cita.hora;
    this.descripcionActividad = this.cita.descripcionActividad;
    this.nombreMascota = this.navParams.get("nombreAnimal");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaModalPage');
  }

  deleteAlert() {
    let alert = this.alerCtrl.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar este evento?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          let alert1 = this.alerCtrl.create({
            title: 'Eliminar',
            message: 'Evento eliminado',
            buttons: [{
              text: 'Aceptar',
              handler: () => {
                this.navCtrl.pop();
              }
            }]
          });
          alert1.present();
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log("Operación cancelada");
        }
      }
    ]
    });
    alert.present();

  }

  upLoad() {
    let alert = this.alerCtrl.create({
      title: 'Genial!!',
      message: 'Actualizacion exitosa!',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

}
