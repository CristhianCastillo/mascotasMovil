import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-supplies-create',
  templateUrl: 'supplies-create.html',
})
export class SuppliesCreatePageAdmin {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  doAlert(){
    let alert = this.alertController.create({
      title: 'Genial!!',
      message: 'Suministro ingresado correctamente!',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesCreatePage');
  }

}
