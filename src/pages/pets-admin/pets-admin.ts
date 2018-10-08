import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PetsOwnerPage } from '../pets-admin/pets-owner/pets-owner';
import { PetServicesPage } from '../pets-admin/pet-services/pet-services';

@Component({
  selector: 'page-pets-admin',
  templateUrl: 'pets-admin.html',
})
export class PetsAdminPage {

  pet: string = "duenios";

  clientes = [
    {
      nombreCliente: 'Cristhian Castillo',
      numerovisitas: 10,
      ultimaSolicitud: '2018-09-02 12:01 pm',
      mascotas: [
        {
          nombreMascota: 'Maxi',
          ultimaSolicitud: '2018-09-02 12:01 pm',
          servicios: [
            {
              tipoServicio: 'Peluqueria',
              estado: 'Finalizada',
              fecha: '2018-07-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 2:00pm??.. Gracias!!'
            },
            {
              tipoServicio: 'Baño',
              estado: 'No Finalizada',
              fecha: '2018-09-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 10:00am??.. Gracias!!'
            }
          ]
        },
        {
          nombreMascota: 'Gatita',
          ultimaSolicitud: '2018-05-02 14:01 pm',
          servicios: [
            {
              tipoServicio: 'Peluqueria',
              estado: 'Finalizada',
              fecha: '2018-07-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 2:00pm??.. Gracias!!'
            },
            {
              tipoServicio: 'Baño',
              estado: 'No Finalizada',
              fecha: '2018-09-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 10:00am??.. Gracias!!'
            }
          ]
        }

      ]
    },
    {
      nombreCliente: 'Juan Castillo',
      numerovisitas: 5,
      ultimaSolicitud: '2018-09-02 12:01 pm',
      mascotas: [
        {
          nombreMascota: 'Maxi',
          ultimaSolicitud: '2018-09-02 12:01 pm',
          servicios: [
            {
              tipoServicio: 'Peluqueria',
              estado: 'Finalizada',
              fecha: '2018-07-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 2:00pm??.. Gracias!!'
            },
            {
              tipoServicio: 'Baño',
              estado: 'No Finalizada',
              fecha: '2018-09-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 10:00am??.. Gracias!!'
            }
          ]
        },
        {
          nombreMascota: 'Gatita',
          ultimaSolicitud: '2018-05-02 14:01 pm',
          servicios: [
            {
              tipoServicio: 'Peluqueria',
              estado: 'Finalizada',
              fecha: '2018-07-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 2:00pm??.. Gracias!!'
            },
            {
              tipoServicio: 'Baño',
              estado: 'No Finalizada',
              fecha: '2018-09-02 12:01 pm',
              mensaje: 'Hola, me podrias atender a las 10:00am??.. Gracias!!'
            }
          ]
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsAdminPage');
  }

  gotToViewHisPets(cliente) {
    this.navCtrl.push(PetsOwnerPage, { cliente: cliente });
  }

  gotToViewPet(mascota){
    this.navCtrl.push(PetServicesPage, {mascota: mascota});
  }
}
