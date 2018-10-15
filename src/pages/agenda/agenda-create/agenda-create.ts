import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder) {
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
  }

  getDataEvent(){
    const evento = {
      nombreEvento: this.registerEventForm.value['nombreEvento'],
      ubicacion: this.registerEventForm.value['ubicacion'],
      tipoActividad: this.registerEventForm.value['tipoActividad'],
      fechaEvento: this.registerEventForm.value['fechaEvento'],
      horaEvento: this.registerEventForm.value['horaEvento'],
      descripcion: this.registerEventForm.value['descripcion']
    }
    this.createEvent(evento);
  }

  createEvent(event){
    this.showUserMessageCorrect("Evento generado correctamente.");
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
