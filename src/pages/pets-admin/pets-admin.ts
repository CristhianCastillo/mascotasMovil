import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { RequestsProvider } from '../../providers/requests/requests';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pets-admin',
  templateUrl: 'pets-admin.html',
})
export class PetsAdminPage {

  public searchForm: FormGroup;
  public requests: any;
  public requestSelected: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private global: GlobalProvider,
    private service: RequestsProvider, private formBuilder: FormBuilder, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private  loadingController: LoadingController) {

      this.searchForm = this.formBuilder.group({
        fechaInicial: ['', Validators.required],
        fechaFinal: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsAdminPage');
  }

  ionViewDidEnter(){
    const loader = this.loadingController.create({
      content: 'Actualizando...'
    });
    loader.present();
    this.service.getTopRequests(this.global._id).subscribe(
      (data: any) => {
        this.requests = data;
        loader.dismiss();
      },
      (error) => {
        console.error(error);
        loader.dismiss();
      }
    );
  }

  search(){
    const filtro = {
      fechaInicial: this.searchForm.value['fechaInicial'],
      fechaFinal: this.searchForm.value['fechaFinal']
    }
    console.log(filtro);
    this.service.getRequestsDate(filtro, this.global._id).subscribe(
      (result: any) => {
        console.log(result);
        if (result === 'false') {
          let toast = this.toastCtrl.create({
            message: 'No se pueden buscar las solicitudes en este momento.',
            duration: 2000,
          });
          toast.present();
        } else {
          this.requests = result;
        }
      }
    );
  }

  sendResponse(response){
    console.log(response.id);
    let prompt = this.alertCtrl.create({
      title: 'Enviar Respuesta',
      message: "Usuario dice: " + response.mensaje,
      inputs: [
        {
          name: 'Respuesta',
          placeholder: 'Tu respuesta'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            if(data != null && data != ''){
              const respuesta ={
                respuesta : data.Respuesta
              }
              this.service.sendResponse(respuesta, response.id).subscribe(
                (result: any) => {
                  console.log(result);
                  if (result.status) {
                   this.showUserMessageCorrect('Mensaje enviado correctamente.');
                  } else {
                    this.showUserMessageError('No se ha podido enviar el mensaje.');
                  }
                }
              );

            }
            console.log('Saved clicked');
            console.log(JSON.stringify(data)); //to see the object
            console.log(data.Respuesta);
          }
        }
      ]
    });
    prompt.present();
  }

  showUserMessageCorrect(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      message: mensaje,
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          
        }
      }]
    });
    alert.present()
  }

  showUserMessageError(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: mensaje,
      buttons: [{
        text: 'Aceptar'
      }]
    });
    alert.present()
  }
}
