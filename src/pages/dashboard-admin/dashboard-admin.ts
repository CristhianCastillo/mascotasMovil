import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-dashboard-admin',
  templateUrl: 'dashboard-admin.html',
})
export class DashboardAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardAdminPage');
    var data = google.visualization.arrayToDataTable([
      ['Servicios', 'Clientes'],
      ['Veterinaria', 11],
      ['Comida', 2],
      ['Peluqueria', 12],
      ['Guarderia', 2]
    ]);

    var options = {
      title: 'Servicios solicitados'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

}
