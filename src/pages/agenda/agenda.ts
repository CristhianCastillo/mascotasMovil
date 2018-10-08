import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChoosePetPage } from '../agenda/choose-pet/choose-pet';
import { AgendaModalPage } from '../agenda/agenda-modal/agenda-modal';
import {Cita} from "../../models/cita";

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  public agenda = [
    {
      idMascota: 1,
      nombre: 'Muñeca',
      citas: [
        {
          id: 1,
          nombre: "Corte de pelo",
          ubicacion: "Kr 45 F",
          tipoActividad: "Peluqueria",
          fechaEvento: "2018-01-01",
          horaEvento: "12:00",
          descripcionEvento: "Corte de pelo semestral."
        },
        {
          id: 2,
          nombre: "Vacuna anual",
          ubicacion: "Calle 34 F 34",
          tipoActividad: "Vacuna B2",
          fechaEvento: "2019-05-01",
          horaEvento: "12:00",
          descripcionEvento: "Vacuna anual contra la rabia"
        }
      ]
    },
    {
      idMascota: 2,
      nombre: 'Maxi',
      citas: [
        {
          id: 3,
          nombre: "Baño en casa",
          ubicacion: "Kr 45 F",
          tipoActividad: "Baño",
          fechaEvento: "2018-08-10",
          horaEvento: "12:00",
          descripcionEvento: "Baño semanal."
        },
        {
          id: 4,
          nombre: "Vacuna anual",
          ubicacion: "Calle 34 F 34",
          tipoActividad: "Vacuna B2",
          fechaEvento: "2019-05-01",
          horaEvento: "12:00",
          descripcionEvento: "Vacuna anual contra la rabia"
        }
      ]
    },
    {
      idMascota: 3,
      nombre: 'Remy',
      citas: [
        {
          id: 5,
          nombre: "Ir al veterinario",
          ubicacion: "Kr 45 F",
          tipoActividad: "Veterinario",
          fechaEvento: "2018-08-10",
          horaEvento: "12:00",
          descripcionEvento: "Control medico semestral."
        },
        {
          id: 6,
          nombre: "Cepillado de dientes",
          ubicacion: "Calle 34 F 34",
          tipoActividad: "dientes",
          fechaEvento: "2019-05-01",
          horaEvento: "15:00",
          descripcionEvento: "Cepillado de dientes"
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  goToViewEvent(cita: Cita, nombreAnimal){
    this.navCtrl.push(AgendaModalPage,{cita: cita, nombreAnimal});
  }

  goToChoseePet(){
    this.navCtrl.push(ChoosePetPage);
  }
}
