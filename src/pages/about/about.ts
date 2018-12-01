import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestsProvider } from '../../providers/requests/requests';

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
  public json: any;
  constructor(public navCtrl: NavController, private service: RequestsProvider) {

    this.service.getTest().subscribe(
      (users) => {
        console.log(users);
        this.json = users;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
