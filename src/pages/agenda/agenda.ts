import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChoosePetPage } from '../agenda/choose-pet/choose-pet';
import { AgendaModalPage } from '../agenda/agenda-modal/agenda-modal';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  agenda = [
    {
      nombre: 'Muñeca',
      citas: [
        {
          nombreEvento: "Corte de pelo",
          ubicacion: "Kr 45 F",
          tipoActividad: "Peluqueria",
          fecha: "2018-01-01",
          hora: "12:00",
          descripcionActividad: "Corte de pelo semestral."
        },
        {
          nombreEvento: "Vacuna anual",
          ubicacion: "Calle 34 F 34",
          tipoActividad: "Vacuna B2",
          fecha: "2019-05-01",
          hora: "12:00",
          descripcionActividad: "Vacuna anual contra la rabia"
        }
      ]
    },
    {
      nombre: 'Maxi',
      citas: [
        {
          nombreEvento: "Baño en casa",
          ubicacion: "Kr 45 F",
          tipoActividad: "Baño",
          fecha: "2018-08-10",
          hora: "12:00",
          descripcionActividad: "Baño semanal."
        },
        {
          nombreEvento: "Vacuna anual",
          ubicacion: "Calle 34 F 34",
          tipoActividad: "Vacuna B2",
          fecha: "2019-05-01",
          hora: "12:00",
          descripcionActividad: "Vacuna anual contra la rabia"
        }
      ]
    },
    {
      nombre: 'Remy',
      citas: [
        {
          nombreEvento: "Ir al veterinario",
          ubicacion: "Kr 45 F",
          tipoActividad: "Veterinario",
          fecha: "2018-08-10",
          hora: "12:00",
          descripcionActividad: "Control medico semestral."
        },
        {
          nombreEvento: "Cepillado de dientes",
          ubicacion: "Calle 34 F 34",
          tipoActividad: "dientes",
          fecha: "2019-05-01",
          hora: "15:00",
          descripcionActividad: "Cepillado de dientes"
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToViewEvent(cita, nombreAnimal){
    this.navCtrl.push(AgendaModalPage,{cita: cita, nombreAnimal});
  }

  goToChoseePet(){
    this.navCtrl.push(ChoosePetPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
