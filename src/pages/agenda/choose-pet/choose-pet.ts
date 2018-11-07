import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { PetsServiceProvider } from '../../../providers/pets-service/pets-service';
import { GlobalProvider } from '../../../providers/global/global';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-choose-pet',
  templateUrl: 'choose-pet.html',
})
export class ChoosePetPage {

  public mascotas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private loadingController: LoadingController, private service: PetsServiceProvider,
    private global: GlobalProvider, public _DomSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePetPage');
    const loader = this.loadingController.create({
      content: 'Actualizando...'
    });
    loader.present();
    const idUsuario: string = this.global._id;
    this.service.getAllPets(idUsuario).subscribe(
      (data)=>{
        console.log(data);
        this.mascotas = data;
        loader.dismiss();
      },
      (error)=>{
        console.error(error);
        loader.dismiss();
      }
    )
  }

  goToCreateEvent(mascota){
    console.log(mascota.nombre);
    this.navCtrl.push('AgendaCreatePage', mascota);
  }
}
