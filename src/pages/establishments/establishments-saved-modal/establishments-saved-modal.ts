import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.establecimiento = this.navParams.get("establecimiento");

    this.nombreEstablecimiento = this.establecimiento.nombreEstablecimiento;
    this.direccion = this.establecimiento.direccion;
    this.telefono = this.establecimiento.telefono;
    this.email = this.establecimiento.email;
    this.paginaWeb = this.establecimiento.paginaWeb;
    this.calificacion = this.establecimiento.calificacion;
    this.imagenEstablecimiento = this.establecimiento.imagenEstablecimiento;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentsSavedModalPage');
  }

}
