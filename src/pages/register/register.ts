import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController
  , public global: GlobalProvider) {
    let backAction =  platform.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.pop();
      backAction();
    },2)
  }

  goPrincipalMenu(){
    this.global.set('tipoUsuario');
    const loader = this.loadingCtrl.create({
      content: "Por favor espera...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.setRoot(TabsPage);
    loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
