import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform,
              private menu: MenuController) {
    platform.registerBackButtonAction(() => {console.log("backPressed 1");},1);
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  goRegisterUser(){
    this.navCtrl.push('RegisterPage');
  }

  goRegisterAdmin(){
    this.navCtrl.push('RegisterAdminPage');
  }
}
