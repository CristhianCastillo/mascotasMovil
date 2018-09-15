import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pet-modal',
  templateUrl: 'pet-modal.html',
})
export class PetModalPage {

  tipoMascotaAlertOpts: { title: string, subTitle: string };

  nombre: string;
  tipoMascota: string;
  genero: string;
  fechaNacimiento: string;
  raza: string;
  esterilizado: string;
  color: string;
  descripcion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alerCtrl: AlertController) {
    this.tipoMascotaAlertOpts = {
      title: 'Tipo Mascotas',
      subTitle: 'Selecciona'
    };

    this.navParams.get('imagen');
    this.nombre = this.navParams.get('nombre');
    this.tipoMascota = this.navParams.get('tipoMascota');
    this.genero = this.navParams.get('genero');
    this.fechaNacimiento = this.navParams.get('fechaNacimiento');
    this.raza = this.navParams.get('raza');
    this.esterilizado = this.navParams.get('esterilizado');
    this.color = this.navParams.get('color');
    this.descripcion = this.navParams.get('descripcion');
  }

  deleteAlert() {
    let alert = this.alerCtrl.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar esta mascota?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          let alert1 = this.alerCtrl.create({
            title: 'Eliminar',
            message: 'Mascota eliminada',
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
    let alert = this.alerCtrl.create({
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
    console.log('ionViewDidLoad PetModalPage');
  }

  stpSelect() {
    console.log('STP selected');
  }

}
