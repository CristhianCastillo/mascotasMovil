import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, IonicPage } from 'ionic-angular';

//import { RegisterAdminPage } from '../register-admin/register-admin';
//import { RegisterPage } from '../register/register';
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
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }

  goRegisterUser(){
    this.navCtrl.push('RegisterPage');
  }

  goRegisterAdmin(){
    this.navCtrl.push('RegisterAdminPage');
  }
}
