import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, ModalOptions, IonicPage } from 'ionic-angular';
import { MessageModalPage } from '../message-modal/message-modal';
import {Establecimiento} from "../../../models/establecimiento";
import { DomSanitizer } from '@angular/platform-browser';
import { EstablishmentProvider } from '../../../providers/establishment/establishment';

@IonicPage()
@Component({
  selector: 'page-establishments-search',
  templateUrl: 'establishments-search.html',
})
export class EstablishmentsSearchPage {

  public establecimiento: Establecimiento;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public alerCtrl: AlertController,
    public _DomSanitizer: DomSanitizer, private service: EstablishmentProvider) {
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
    const myModal = this.modal.create(MessageModalPage, {nombre: this.establecimiento.nombre, id: this.establecimiento.id}, myModalOptions);
    myModal.present();
  }

  calificarEstablecimiento(tipo: string){
    let calificacion;
    if(tipo === 'Buena'){
        calificacion = {
        calificacion : 'BUENA'
      }
    }
    else{
        calificacion = {
        calificacion : 'MALA'
      }
    }
    this.service.qualifyEstablishment(this.establecimiento.id, calificacion).subscribe(
      (data) => {
        console.log(data);
        if(data.status){
          this.showUserMessageCorrect('Calificación realizada correctamente.');
        } else {
          this.showUserMessageCorrect('No se pudo calificar el establecimiento.');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showUserMessageCorrect(mensaje: string) {
    let alert = this.alerCtrl.create({
      title: 'Mensaje',
      message: mensaje,
      buttons: [{
        text: 'Aceptar',
        handler: () => {
        }
      }]
    });
    alert.present()
  }
}
