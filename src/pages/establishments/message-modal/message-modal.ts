import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { PetsServiceProvider } from '../../../providers/pets-service/pets-service';
import { AgendaProvider } from '../../../providers/agenda/agenda';
import { GlobalProvider } from '../../../providers/global/global';
import { RequestsProvider } from '../../../providers/requests/requests';

@Component({
  selector: 'page-message-modal',
  templateUrl: 'message-modal.html',
})
export class MessageModalPage {

  private modalMessageForm: FormGroup;
  public nombreEstablecimiento: string;
  public idEstablecimiento: string;
  public listaMascotas: any;
  public services; any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,
              public alertController: AlertController, private formBuilder: FormBuilder,
              private servicePets: PetsServiceProvider, private serviceAgenda: AgendaProvider,
              private global: GlobalProvider, private serviceRequest: RequestsProvider) {
    this.nombreEstablecimiento = this.navParams.get('nombre');
    this.idEstablecimiento = this.navParams.get('id');
    this.modalMessageForm = this.formBuilder.group({
      mascota : ['', Validators.required],
      servicio: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageModalPage');
    const id = this.global._id;
    this.servicePets.getAllPets(id).subscribe(
      (data)=>{
        console.log(data);
        this.listaMascotas= data;
      },
      (error)=>{
        console.error(error);
      }
    );

    this.serviceAgenda.getServicesType().subscribe(
      (data)=>{
        console.log(data);
        this.services = data;
      },
      (error)=>{
        console.error(error);
      }
    );
  }

  ionViewWillLoad(){
    console.log(this.nombreEstablecimiento);
  }

  getDataMessage(){
    const mensaje = {
      idMascota: this.modalMessageForm.value['mascota'],
      idTipo: this.modalMessageForm.value['servicio'],
      idEstablecimiento: this.idEstablecimiento,
      mensaje: this.modalMessageForm.value['mensaje']
    }
    this.sendMessage(mensaje);
  }

  sendMessage(message){
    console.log(message);
    this.serviceRequest.addRequest(message).subscribe(
      (data)=>{
        console.log(data);
        if(data.status){
          this.showUserMessageCorrect('El mensaje ha sido enviado correctamente.');
        } else{
          this.showUserMessageError('No fue posible enviar el mensaje.');
        }
      },
      (error)=>{
        console.error(error);
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
          this.view.dismiss();
        }
      }]
    });
    alert.present()
  }

  closeModal(){
    this.view.dismiss();
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
