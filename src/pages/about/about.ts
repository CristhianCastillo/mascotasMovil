import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public brightness: number = 20;
  public contrast: number = 0;
  public warmth: number = 1300;
  public structure: any = { lower: 33, upper: 60 };
  public text: number = 0;

  constructor(public navCtrl: NavController) {
  }
}
