import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuppliesCreatePage } from '../supplies/supplies-create/supplies-create';
import { SuppliesModalPage } from '../supplies/supplies-modal/supplies-modal';

@Component({
  selector: 'page-supplies',
  templateUrl: 'supplies.html',
})
export class SuppliesPage {

  suministros = [
    {
      nombreTipoSuministro: 'Juguetes',
      detales: [
        {
          nombreSuministro: 'Hueso',
          cantidadSuministro: 3,
          unidadMedida: 'Unidades',
          fechaCompra: '2018-08-08',
          precio: 89.9,
          tienda: 'Veterinaria Grecia',
          consumoDiario: '1 por semana',
          comentarios: 'Es el juguete favortio.'
        },
        {
          nombreSuministro: 'Pelota de lana',
          cantidadSuministro: 8,
          unidadMedida: 'Unidades',
          fechaCompra: '2016-08-08',
          precio: 100.9,
          tienda: 'Veterinaria Past',
          consumoDiario: '1 por semana',
          comentarios: 'Es el juguete favortio.'
        }
      ]
    },
    {
      nombreTipoSuministro: 'Alimento',
      detales: [
        {
          nombreSuministro: 'Purina cachorros',
          cantidadSuministro: 25.5,
          unidadMedida: 'Kg',
          fechaCompra: '2018-09-08',
          precio: 100.0,
          tienda: 'Veterinaria Grecia',
          consumoDiario: '1 Kg por semana',
          comentarios: 'Comida para los cachorros'
        },
        {
          nombreSuministro: 'Purina gatitos',
          cantidadSuministro: 10.3,
          unidadMedida: 'Kg',
          fechaCompra: '2018-08-08',
          precio: 50.0,
          tienda: 'Veterinaria Past',
          consumoDiario: '0.5 Kg por semana',
          comentarios: 'Comida para los gatitos.'
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCreateSupplie(){
    this.navCtrl.push(SuppliesCreatePage);
  }

  goToViewSupplie(detalle){
    this.navCtrl.push(SuppliesModalPage, {detalle: detalle});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesPage');
  }

}
