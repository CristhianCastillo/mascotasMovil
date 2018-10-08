import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Cita } from "../../../models/cita";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder) {

    this.evento = <Cita>this.navParams.get("cita");
    this.nombreMascota = this.navParams.get("nombreAnimal");

    this.editEventForm = this.formBuilder.group({
      nombreEvento : [this.evento.nombre, Validators.required],
      ubicacion: [this.evento.ubicacion, Validators.required],
      tipoActividad: [this.evento.tipoActividad, Validators.required],
      fechaEvento: [this.evento.fechaEvento, Validators.required],
      horaEvento: [this.evento.horaEvento, Validators.required],
      descripcion: [this.evento.descripcionEvento, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaModalPage');
  }

  getDataEvent(){
    const evento = {
      nombreEvento: this.editEventForm.value['nombreEvento'],
      ubicacion: this.editEventForm.value['ubicacion'],
      tipoActividad: this.editEventForm.value['tipoActividad'],
      fechaEvento: this.editEventForm.value['fechaEvento'],
      horaEvento: this.editEventForm.value['horaEvento'],
      descripcion: this.editEventForm.value['descripcion']
    }
    this.editEvent(evento);
  }

  editEvent(event){
    this.showUserMessageCorrect("Evento actualizado correctamente.");
    // this.servicePet.createPet(data).subscribe(
    //   (result: Mascota) =>{
    //     console.log(result);
    //     if(result){
    //       this.userMessageCorrect("Un amigo tuyo acaba de ser creado.");
    //     }
    //     else{
    //       this.userMessageError("Ha ocurrido un error");
    //     }
    //   }
    // );
    console.log(event);
  }

  deleteEvent(event) {
  }

  showAlertDeleteEvent() {
    let alert = this.alertController.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar este evento?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          let alert1 = this.alertController.create({
            title: 'Eliminar',
            message: 'Evento eliminado',
            buttons: [{
              text: 'Aceptar',
              handler: () => {
                this.navCtrl.pop();
              }
            }]
          });
          alert1.present();
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
