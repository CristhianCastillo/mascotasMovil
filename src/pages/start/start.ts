import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RegisterAdminPage } from '../register-admin/register-admin';
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

  goRegisterUser(){
    this.navCtrl.push(RegisterPage);
  }

  goRegisterAdmin(){
    this.navCtrl.push(RegisterAdminPage);
  }
}