import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-pet-services',
  templateUrl: 'pet-services.html',
})
export class PetServicesPage {

  public mascota: any;
  public servicios: any[];
  public nombreMascota: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertController: AlertController) {
    this.mascota = this.navParams.get('mascota');
    this.nombreMascota = this.mascota.nombreMascota;
    this.servicios = this.mascota.servicios;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetServicesPage');
  }

  showViewMessage(mensaje) {
    let alert = this.alertController.create({
      title: 'Mensaje',
      message: mensaje,
      buttons: [{
        text: 'Aceptar'
      }]
    });
    alert.present()
  }

}
