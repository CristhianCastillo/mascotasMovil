import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuppliesCreatePageAdmin } from '../supplies-admin/supplies-create/supplies-create';
import { SuppliesModalPageAdmin } from '../supplies-admin/supplies-modal/supplies-modal';

@Component({
  selector: 'page-supplies',
  templateUrl: 'supplies.html',
})
export class SuppliesAdminPage {

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
          proveedor: 'Veterinaria Grecia',
          comentarios: 'Es el juguete favortio.'
        },
        {
          nombreSuministro: 'Pelota de lana',
          cantidadSuministro: 8,
          unidadMedida: 'Unidades',
          fechaCompra: '2016-08-08',
          precio: 100.9,
          proveedor: 'Veterinaria Past',
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
          proveedor: 'Veterinaria Grecia',
          comentarios: 'Comida para los cachorros'
        },
        {
          nombreSuministro: 'Purina gatitos',
          cantidadSuministro: 10.3,
          unidadMedida: 'Kg',
          fechaCompra: '2018-08-08',
          precio: 50.0,
          proveedor: 'Veterinaria Past',
          comentarios: 'Comida para los gatitos.'
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCreateSupplie(){
    this.navCtrl.push(SuppliesCreatePageAdmin);
  }

  goToViewSupplie(detalle){
    this.navCtrl.push(SuppliesModalPageAdmin, {detalle: detalle});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesPage');
  }

}
