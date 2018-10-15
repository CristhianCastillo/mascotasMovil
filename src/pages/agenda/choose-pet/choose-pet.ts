import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
//import { AgendaCreatePage } from '../agenda-create/agenda-create';

@IonicPage()
@Component({
  selector: 'page-choose-pet',
  templateUrl: 'choose-pet.html',
})
export class ChoosePetPage {

  mascotas = [
    {
      id: 1,
      imagen: '../../assets/imgs/pet - 1.png',
      nombre: 'Pepe',
      tipoMascota: 'Raton',
      genero: 'Macho',
      fechaNacimiento: '2018-01-01',
      raza: 'Raton',
      esterilizado: 'Si',
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
      esterilizado: 'Si',
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
      esterilizado: 'Si',
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
      esterilizado: 'Si',
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
      esterilizado: 'Si',
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
      esterilizado: 'Si',
      color: 'Cafe y blanco',
      descripcion: 'Es un animal muy veloz.'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePetPage');
  }

  goToCreateEvent(mascota){
    console.log(mascota.nombre);
    this.navCtrl.push('AgendaCreatePage', mascota);
  }
}
