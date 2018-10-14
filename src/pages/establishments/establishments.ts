import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstablishmentsSavedModalPage } from '../establishments/establishments-saved-modal/establishments-saved-modal';
import { EstablishmentsSearchPage } from '../establishments/establishments-search/establishments-search';
import { Establecimiento } from "../../models/establecimiento";

@Component({
  selector: 'page-establishments',
  templateUrl: 'establishments.html',
})
export class EstablishmentsPage {

  public pet: string = "saved";
  public establecimientosGuardados: any = [
    {
      imagen: '../../assets/imgs/shop - 1.jpg',
      nombre: 'Pet Store',
      distancia: '0.5 Km',
      tiempo: '15 min',
      direccion: 'Crr 45 F No 23',
      telefono: '3193191948',
      email: 'petShop@gmail.com',
      paginaWeb: 'www.petShop.com',
      servicios: ['Veterinaria', 'Tienda'],
      horarios: 'Establecidos',
      horaInicio: '08:00',
      horaFinal: '23:00',
      descripcion: 'Establecimiento para mascotas.',
      calificacion: 'Buena'
    }
  ];

  public establecimientosBuscar: any = [
    {
      imagen: '../../assets/imgs/shop - 2.jpg',
      nombre: 'Veterinaria Grecia',
      distancia: '0.3 Km',
      tiempo: '10 min',
      direccion: 'Crr 45 F No 23',
      telefono: '6197601',
      email: 'veterinariaGrecia@gmail.com',
      paginaWeb: 'www.veterinariagrecia.com',
      servicios: ['Veterinaria', 'Tienda', 'Peluqueria'],
      horarios: 'Establecidos',
      horaInicio: '04:00',
      horaFinal: '23:00',
      descripcion: 'Establecimiento para todo tipo de mascotas.',
      calificacion: 'Regular'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentsPage');
  }

  gotToViewEstablishmentSaved(establecimiento: Establecimiento){
    console.log(establecimiento);
    this.navCtrl.push(EstablishmentsSavedModalPage, {establecimiento: establecimiento});
  }

  gotToViewEstablishmentSearch(establecimiento: Establecimiento){
    this.navCtrl.push(EstablishmentsSearchPage, {establecimiento: establecimiento});
  }
}
