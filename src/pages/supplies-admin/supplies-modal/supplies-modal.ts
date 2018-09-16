import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-supplies-modal',
  templateUrl: 'supplies-modal.html',
})
export class SuppliesModalPageAdmin {

  detalle: any;
  nombreSuministro: string;
  cantidadSuministro: number;
  unidadSuministro: string;
  fechaCompra: string;
  precio: number;
  proveedor: string;
  comentarios: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    this.detalle = this.navParams.get('detalle');
    this.nombreSuministro = this.detalle.nombreSuministro;
    this.cantidadSuministro = this.detalle.cantidadSuministro;
    this.unidadSuministro = this.detalle.unidadMedida;
    this.fechaCompra = this.detalle.fechaCompra;
    this.precio = this.detalle.precio;
    this.proveedor = this.detalle.proveedor;
    this.comentarios = this.detalle.comentarios;
  }

  deleteAlert() {
    let alert = this.alertController.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar esta suministro?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          let alert1 = this.alertController.create({
            title: 'Eliminar',
            message: 'Suministro eliminado',
            buttons: [{
              text: 'Aceptar',
              handler: () => {
                this.navCtrl.pop();
              }
            }]
          });
          alert1.present();
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log("Operación cancelada");
        }
      }
    ]
    });
    alert.present();

  }

  upLoad() {
    let alert = this.alertController.create({
      title: 'Genial!!',
      message: 'Actualizacion exitosa!',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesModalPage');
  }

}
