import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ModalOptions, AlertController} from 'ionic-angular';
import { MessageModalPage } from '../message-modal/message-modal';
import { Establecimiento } from "../../../models/establecimiento";

@Component({
  selector: 'page-establishments-saved-modal',
  templateUrl: 'establishments-saved-modal.html',
})
export class EstablishmentsSavedModalPage {

  public establecimiento: Establecimiento;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public alerCtrl: AlertController) {
    this.establecimiento = <Establecimiento>this.navParams.get("establecimiento");

    console.log(this.establecimiento);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentsSavedModalPage');
  }

  deleteEstablishment() {
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
    const myModal = this.modal.create(MessageModalPage, {nombre: this.establecimiento.nombre}, myModalOptions);
    myModal.present();
  }
}
