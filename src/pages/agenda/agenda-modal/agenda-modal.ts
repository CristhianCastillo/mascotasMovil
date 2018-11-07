import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Cita } from "../../../models/cita";
import { AgendaProvider } from '../../../providers/agenda/agenda';

@IonicPage()
@Component({
  selector: 'page-agenda-modal',
  templateUrl: 'agenda-modal.html',
})
export class AgendaModalPage {

  /**
   * Form register.
   */
  private editEventForm: FormGroup;
  public evento: Cita;
  public nombreMascota: string;
  public idMascota: string;
  public tipoActividadAlertOpts: { title: string, subTitle: string };
  public services: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder, private service: AgendaProvider) {
    this.tipoActividadAlertOpts = {
      title: 'Tipo Actividad',
      subTitle: 'Selecciona'
    };

    this.evento = <Cita>this.navParams.get("cita");
    this.nombreMascota = this.navParams.get("nombreAnimal");
    this.idMascota = this.navParams.get('id');

    let hora: string[] = this.evento.fecha.split(' ');
    this.editEventForm = this.formBuilder.group({
      nombreEvento : [this.evento.nombre, Validators.required],
      ubicacion: [this.evento.ubicacion, Validators.required],
      tipoActividad: [this.evento.tipoActividad, Validators.required],
      fechaEvento: [hora[0], Validators.required],
      horaEvento: [hora[1], Validators.required],
      descripcion: [this.evento.descripcionEvento, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaModalPage');
    this.service.getServicesType().subscribe(
      (result: any ) => {
        this.services = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDataEvent(){
    const evento = {
      idMascota: this.idMascota,
      nombre: this.editEventForm.value['nombreEvento'],
      ubicacion: this.editEventForm.value['ubicacion'],
      idTipo: this.editEventForm.value['tipoActividad'],
      fecha: this.editEventForm.value['fechaEvento'] + ' ' + this.editEventForm.value['horaEvento'],
      descripcion: this.editEventForm.value['descripcion']
    }
    this.editEvent(evento);
  }

  editEvent(event){
    console.log(event);
    this.service.updateEvent(this.evento.id, event).subscribe(
       (result: any) =>{
         console.log(result);
         if(result.status){
           this.showUserMessageCorrect("Evento actualizado correctamente.");
         }
         else{
           this.showUserMessageError("El evento no se ha podido actualizar.");
         }
       }
     );
    console.log(event);
  }

  deleteEvent() {
    this.service.deleteEvent(this.evento.id).subscribe(
      (result: any ) => {
        console.log(result);
        if (result.status) {
          this.showUserMessageCorrect("Evento actualizado correctamente.");
        } else {
          this.showUserMessageError("El evento no se ha podido actualizar.");
        }
      }
    );
  }

  showAlertDeleteEvent() {
    let alert = this.alertController.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar este evento?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.deleteEvent();
        }
      },
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Operación cancelada");
          }
        }
      ]
    });
    alert.present();
  }

  showUserMessageCorrect(mensaje: string) {
    let alert = this.alertController.create({
      title: 'Mensaje',
      message: mensaje,
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present()
  }

  showUserMessageError(mensaje: string) {
    let alert = this.alertController.create({
      title: 'Error',
      message: mensaje,
      buttons: [{
        text: 'Aceptar'
      }]
    });
    alert.present()
  }
}
