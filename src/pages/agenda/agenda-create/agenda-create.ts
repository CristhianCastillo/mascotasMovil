import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AgendaProvider } from '../../../providers/agenda/agenda'

@IonicPage()
@Component({
  selector: 'page-agenda-create',
  templateUrl: 'agenda-create.html',
})
export class AgendaCreatePage {

  /**
   * Form register.
   */
  private registerEventForm: FormGroup;
  public tipoActividadAlertOpts: { title: string, subTitle: string };
  public idMascota: any;
  public nombreMascota: string;
  public services: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder, private service: AgendaProvider) {
    this.tipoActividadAlertOpts = {
      title: 'Tipo Actividad',
      subTitle: 'Selecciona'
    };

    this.idMascota = this.navParams.get('id');
    this.nombreMascota = this.navParams.get('nombre');
    this.registerEventForm = this.formBuilder.group({
      nombreEvento : ['', Validators.required],
      ubicacion: ['', Validators.required],
      tipoActividad: ['', Validators.required],
      fechaEvento: ['', Validators.required],
      horaEvento: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaCreatePage');
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
      nombre: this.registerEventForm.value['nombreEvento'],
      ubicacion: this.registerEventForm.value['ubicacion'],
      idTipo: this.registerEventForm.value['tipoActividad'],
      fecha: this.registerEventForm.value['fechaEvento'] + ' ' + this.registerEventForm.value['horaEvento'],
      descripcion: this.registerEventForm.value['descripcion']
    }
    this.createEvent(evento);
  }

  createEvent(event){
    console.log(event);
    this.service.createEvent(event).subscribe(
       (result: any) =>{
         console.log(result);
         if(result.status){
           this.showUserMessageCorrect("Evento registrado correctamente.");
         }
         else{
           this.showUserMessageError("El evento no ha sido registrado.");
         }
       }
     );
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
