import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ModalOptions, AlertController} from 'ionic-angular';
import { MessageModalPage } from '../message-modal/message-modal';

@Component({
  selector: 'page-establishments-saved-modal',
  templateUrl: 'establishments-saved-modal.html',
})
export class EstablishmentsSavedModalPage {

  establecimiento: any;
  
  imagenEstablecimiento: string;
  nombreEstablecimiento: string;
  distancia: string;
  tiempo: string;
  direccion: string;
  telefono: string;
  email: string;
  paginaWeb: string;
  servicios: string[];
  horarios: string;
  horaInicio: string;
  horaFinal: string;
  descripcion: string;
  calificacion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public alerCtrl: AlertController) {
    this.establecimiento = this.navParams.get("establecimiento");

    this.nombreEstablecimiento = this.establecimiento.nombreEstablecimiento;
    this.direccion = this.establecimiento.direccion;
    this.telefono = this.establecimiento.telefono;
    this.email = this.establecimiento.email;
    this.paginaWeb = this.establecimiento.paginaWeb;
    this.calificacion = this.establecimiento.calificacion;
    this.imagenEstablecimiento = this.establecimiento.imagenEstablecimiento;
  }

  deleteAlert() {
    let alert = this.alerCtrl.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar este establecimiento?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          let alert1 = this.alerCtrl.create({
            title: 'Eliminar',
            message: 'Establecimiento eliminado',
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

  viewSendMessage(){

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModal = this.modal.create(MessageModalPage, {nombre: this.nombreEstablecimiento}, myModalOptions);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentsSavedModalPage');
  }

}
