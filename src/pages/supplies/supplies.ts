import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
//import { SuppliesCreatePage } from '../supplies/supplies-create/supplies-create';
//import { SuppliesModalPage } from '../supplies/supplies-modal/supplies-modal';
import { Suministro } from "../../models/suministro";

@IonicPage()
@Component({
  selector: 'page-supplies',
  templateUrl: 'supplies.html',
})
export class SuppliesPage {

  public suministros: any = [
    {
      nombreTipoSuministro: 'Juguetes',
      detalles: [
        {
          id: 1,
          tipoSuministro: 'Juguetes',
          nombre: 'Hueso',
          cantidad: 3,
          unidadMedida: 'Unidades',
          fecha: '2018-08-08',
          precio: 89.9,
          proveedor: 'Veterinaria Grecia',
          consumoDiario: '1 por semana',
          comentario: 'Es el juguete favortio.',
          idUsuario: 1
        },
        {
          id: 2,
          tipoSuministro: 'Juguetes',
          nombre: 'Pelota de lana',
          cantidad: 8,
          unidadMedida: 'Unidades',
          fecha: '2016-08-08',
          precio: 100.9,
          proveedor: 'Veterinaria Past',
          consumoDiario: '1 por semana',
          comentario: 'Es el juguete favortio.',
          idUsuario: 1
        }
      ]
    },
    {
      nombreTipoSuministro: 'Alimento',
      detalles: [
        {
          id: 3,
          tipoSuministro: 'Alimento',
          nombre: 'Purina cachorros',
          cantidad: 25.5,
          unidadMedida: 'Kg',
          fecha: '2018-09-08',
          precio: 100.0,
          proveedor: 'Veterinaria Grecia',
          consumoDiario: '1 Kg por semana',
          comentario: 'Comida para los cachorros',
          idUsuario: 1
        },
        {
          id: 4,
          tipoSuministro: 'Alimento',
          nombre: 'Purina gatitos',
          cantidad: 10.3,
          unidadMedida: 'Kg',
          fecha: '2018-08-08',
          precio: 50.0,
          proveedor: 'Veterinaria Past',
          consumoDiario: '0.5 Kg por semana',
          comentario: 'Comida para los gatitos.',
          idUsuario: 1
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesPage');
  }

  goToCreateSupplie(){
    this.navCtrl.push('SuppliesCreatePage');
  }

  goToViewSupplie(detalle: Suministro){
    this.navCtrl.push('SuppliesModalPage', {detalle: detalle});
  }
}
