import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PetServicesPage } from '../pet-services/pet-services';

@Component({
  selector: 'page-pets-owner',
  templateUrl: 'pets-owner.html',
})
export class PetsOwnerPage {

  cliente: any;
  mascotas: any[];
  nombreCliente: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
    this.nombreCliente = this.cliente.nombreCliente;
    this.mascotas = this.cliente.mascotas;
    console.log(this.mascotas[0]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsOwnerPage');
  }

  goToViewPet(mascota){
    this.navCtrl.push(PetServicesPage, {mascota: mascota});
  }
}
