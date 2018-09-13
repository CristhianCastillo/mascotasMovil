import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    platform.registerBackButtonAction(() => {console.log("backPressed 1");},1);
  }

  goLogin(){
    this.navCtrl.push(LoginPage);
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
}