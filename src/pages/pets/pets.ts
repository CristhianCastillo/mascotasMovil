import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PetCreatePage } from '../pets/pet-create/pet-create';

@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {

  mascotas = [
    {
      id: 1,
      imagen: '../../assets/imgs/pet - 1.png',
      nombre: 'Pepe',
      tipoMascota: 'Raton',
      genero: 'Macho',
      fechaNacimiento: '2018-01-01',
      raza: 'Raton',
      esterilizado: true,
      color: 'Cafe',
      descripcion: 'Es un animal muy tierno.'
    },
    {
      id: 2,
      imagen: '../../assets/imgs/pet - 2.png',
      nombre: 'Dock',
      tipoMascota: 'Perro',
      genero: 'Macho',
      fechaNacimiento: '2016-06-10',
      raza: 'Salchicha',
      esterilizado: true,
      color: 'Cafe con blanco',
      descripcion: 'Es un animal muy leal.'
    },
    {
      id: 3,
      imagen: '../../assets/imgs/pet - 3.png',
      nombre: 'Muñeca',
      tipoMascota: 'Gatp',
      genero: 'Hembra',
      fechaNacimiento: '2017-03-17',
      raza: 'Gata gris',
      esterilizado: true,
      color: 'Gris',
      descripcion: 'Es una gatita muy curiosa'
    },
    {
      id: 4,
      imagen: '../../assets/imgs/pet - 4.png',
      nombre: 'Flu Flu',
      tipoMascota: 'Conejo',
      genero: 'Macho',
      fechaNacimiento: '2018-06-01',
      raza: 'Conejo Blanco',
      esterilizado: true,
      color: 'Blanco',
      descripcion: 'Es un animal muy saltarin'
    },
    {
      id: 5,
      imagen: '../../assets/imgs/pet - 5.png',
      nombre: 'Sam',
      tipoMascota: 'Loro',
      genero: 'Macho',
      fechaNacimiento: '2012-10-30',
      raza: 'Loro Balcero',
      esterilizado: true,
      color: 'Verde con Amarillo',
      descripcion: 'Es un animal muy calmado.'
    },
    {
      id: 6,
      imagen: '../../assets/imgs/pet - 6.png',
      nombre: 'Maxi',
      tipoMascota: 'Aguila',
      genero: 'Macho',
      fechaNacimiento: '2014-09-14',
      raza: 'Aguila Arpia',
      esterilizado: true,
      color: 'Cafe y blanco',
      descripcion: 'Es un animal muy veloz.'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCreatePet(){
    this.navCtrl.push(PetCreatePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsPage');
  }

}
