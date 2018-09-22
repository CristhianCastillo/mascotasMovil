import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-slide-intro',
  templateUrl: 'slide-intro.html',
})
export class SlideIntroPage {

  

  slides = [
    {
      title: "Bienvenido a Mascotas.ga!",
      description: "",
      image: "../assets/imgs/mascotas.jpg",
    },
    {
      title: "¿Que es Mascotas.ga?",
      description: "<b>Mascotas.ga</b> basicamente es una muestra de amor a tus mascotas.",
      image: "../assets/imgs/amorMascotas.jpg",
    },
    {
      title: "¿Que esperas para usarla?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../assets/imgs/esperar.png",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goStart(){
    this.navCtrl.setRoot(LoginPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideIntroPage');
  }

}
