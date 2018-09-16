import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-establishment-admin',
  templateUrl: 'establishment-admin.html',
})
export class EstablishmentAdminPage {

  datosEstablecimiento = [
    {
      nombre: "Veterinaria Grecia",
      telefono: "321312332",
      direccion: "Crr 35 F 545 sur",
      correo: "veterinariaGrecia@gmail.com",
      paginaWeb: "www.veterinariagrecia.com",
      servicios: "Peluqueria",
      horarios: "Establecido",
      horaInicial: "08:00",
      horaFinal: "22:00",
      descripcion: "Veterinaria para todo tipo de mascotas"
    }
  ];

  nombre: string;
  telefono: string;
  direccion: string;
  correo: string;
  paginaWeb: string;
  servicios: string;
  horarios: string;
  horaInicial: string;
  horaFinal: string;
  descripcion: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
      this.nombre= "Veterinaria Grecia";
      this.telefono= "321312332";
      this.direccion= "Crr 35 F 545 sur";
      this.correo = "veterinariaGrecia@gmail.com";
      this.paginaWeb = "www.veterinariagrecia.com";
      this.servicios = "Peluqueria";
      this.horarios = "Establecido";
      this.horaInicial = "08:00";
      this.horaFinal = "22:00";
      this.descripcion = "Veterinaria para todo tipo de mascotas";
  }

  doAlert(){
    let alert = this.alertController.create({
      title: 'Genial!!',
      message: 'Tu establecimiento ha sido actualizado.',
      buttons: [{
        text: 'Aceptar'
      }]
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentAdminPage');
  }

}
