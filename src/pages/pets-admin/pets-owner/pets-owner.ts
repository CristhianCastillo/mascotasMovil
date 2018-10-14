import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PetServicesPage } from '../pet-services/pet-services';

@Component({
  selector: 'page-pets-owner',
  templateUrl: 'pets-owner.html',
})
export class PetsOwnerPage {

  public cliente: any;
  public mascotas: any[];
  public nombreCliente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
    this.nombreCliente = this.cliente.nombreCliente;
    this.mascotas = this.cliente.mascotas;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsOwnerPage');
  }

  goToViewPet(mascota){
    this.navCtrl.push(PetServicesPage, {mascota: mascota});
  }
}
