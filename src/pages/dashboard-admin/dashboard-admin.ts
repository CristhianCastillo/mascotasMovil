import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {Chart} from 'chart.js';
import { DashboardsProvider } from '../../providers/dashboards/dashboards';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-dashboard-admin',
  templateUrl: 'dashboard-admin.html',
})
export class DashboardAdminPage {

  public chart1DatosTexto: string[];
  public chart1DatosNumeros: number[];
  public chart2DatosTexto: string[];
  public chart2DatosNumeros: number[];

  public chart1: any = null;
  public chart2: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private service: DashboardsProvider, public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardAdminPage');
    const idUsuario: string = this.global._id;
    this.service.getCountServices(idUsuario).subscribe(
      (data: any) => {
        console.log(data);
        this.chart1.data.labels = data.servicios;
        this.chart1DatosNumeros = data.numeros;
        for (let i: number = 0; i < this.chart1DatosNumeros.length; i++) {
          console.log(this.getRandomColorHex());
          this.chart1.data.datasets[0].data.push(this.chart1DatosNumeros[i]);
          this.chart1.data.datasets[0].backgroundColor.push(this.getRandomColorHex());
        }
        this.chart1.update();
      },
      (error) => {
        console.error(error);
      }
    );

    this.service.getCountQualify(idUsuario).subscribe(
      (data: any) => {
        console.log(data);
        this.chart2.data.labels = data.servicios;
        this.chart2DatosNumeros = data.numeros;
        for (let i: number = 0; i < this.chart2DatosNumeros.length; i++) {
          console.log(this.getRandomColorHex());
          this.chart2.data.datasets[0].data.push(this.chart2DatosNumeros[i]);
          this.chart2.data.datasets[0].backgroundColor.push(this.getRandomColorHex());
        }
        this.chart2.update();
      },
      (error) => {
        console.error(error);
      }
    );

    this.chart1 = new Chart('pie-chart-1', {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Solicitudes por servicio',
          backgroundColor: [],
          data: []
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Solicitudes por servicio',
          fontSize: 25,
          fontStyle: 'bold',
          fontFamily: 'Arial'
        }
      }
    });

    this.chart2 = new Chart('pie-chart-2', {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Calificaciones',
          backgroundColor: [],
          data: []
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Calificaciones',
          fontSize: 25,
          fontStyle: 'bold',
          fontFamily: 'Arial'
        }
      }
    });
  }

  getRandomColorHex(): string {
    var hex = '0123456789ABCDEF',
      color: string = '#';
    for (var i = 1; i <= 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
