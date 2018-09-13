import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { StartPage } from '../start/start';
import { RegisterPage } from '../register/register';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController) {
    let backAction =  platform.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.pop();
      backAction();
    },2)
  }

  goResetPassword(){
    this.navCtrl.setRoot(StartPage);
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

  goPrincipalMenu(){
    const loader = this.loadingCtrl.create({
      content: "Por favor espera...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.setRoot(TabsPage);
    loader.dismiss();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
