import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsAdminPage } from '../tabs-admin/tabs-admin';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-register-admin',
  templateUrl: 'register-admin.html',
})
export class RegisterAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController
  , public global: GlobalProvider) {
    let backAction =  platform.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.pop();
      backAction();
    },2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAdminPage');
  }

  goPrincipalMenu(){
    this.global.set('AdminUsuario');
    const loader = this.loadingCtrl.create({
      content: "Por favor espera...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.setRoot(TabsAdminPage);
    loader.dismiss();
  }

}
