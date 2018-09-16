import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-message-modal',
  templateUrl: 'message-modal.html',
})
export class MessageModalPage {

  nombreEstablecimiento: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, public alertCtrl: AlertController) {
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      subTitle: 'Solicitud enviada correctamente!',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.closeModal();
          }
        },
      ]
    });

    alert.present();
  }
  
  closeModal(){
    this.view.dismiss();
  }

  ionViewWillLoad(){
    this.nombreEstablecimiento = this.navParams.get('nombre');
    console.log(this.nombreEstablecimiento);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageModalPage');
  }

}
