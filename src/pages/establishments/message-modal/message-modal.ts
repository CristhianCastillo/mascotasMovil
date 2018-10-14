import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'page-message-modal',
  templateUrl: 'message-modal.html',
})
export class MessageModalPage {

  private modalMessageForm: FormGroup;
  public nombreEstablecimiento: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,
              public alertController: AlertController, private formBuilder: FormBuilder) {
    this.nombreEstablecimiento = this.navParams.get('nombre');
    this.modalMessageForm = this.formBuilder.group({
      mascota : ['', Validators.required],
      servicio: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageModalPage');
  }

  ionViewWillLoad(){
    console.log(this.nombreEstablecimiento);
  }

  getDataMessage(){
    const mensaje = {
      mascota: this.modalMessageForm.value['mascota'],
      servicio: this.modalMessageForm.value['servicio'],
      mensaje: this.modalMessageForm.value['mensaje'],
      establecimiento: this.nombreEstablecimiento
    }
    this.sendMessage(mensaje);
  }

  sendMessage(message){
    this.showUserMessageCorrect("Solicitud enviada correctamente.");
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
    console.log(message);
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
