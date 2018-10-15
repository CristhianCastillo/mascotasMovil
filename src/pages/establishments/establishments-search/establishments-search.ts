import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, ModalOptions, IonicPage } from 'ionic-angular';
import { MessageModalPage } from '../message-modal/message-modal';
import {Establecimiento} from "../../../models/establecimiento";

@IonicPage()
@Component({
  selector: 'page-establishments-search',
  templateUrl: 'establishments-search.html',
})
export class EstablishmentsSearchPage {

  public establecimiento: Establecimiento;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public alerCtrl: AlertController) {
    this.establecimiento = <Establecimiento>this.navParams.get("establecimiento");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentsSearchPage');
  }

  saveEstablishment(){
    let alert = this.alerCtrl.create({
      title: 'Guardar',
      message: 'Establecimiento guardado!',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.pop();
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
