import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { Mascota } from "../../models/mascota";
import { LoadingController } from 'ionic-angular';
import { PetsServiceProvider } from '../../providers/pets-service/pets-service';
import { GlobalProvider } from "../../providers/global/global";
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {

  public mascotas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public petsService: PetsServiceProvider,
              private loadingController: LoadingController, public global: GlobalProvider,
              public _DomSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsPage Primera Vez');
  }

  ionViewDidEnter(){
    const loader = this.loadingController.create({
      content: 'Actualizando...'
    });
    loader.present();
    const idUsuario: string = this.global._id;
    this.petsService.getAllPets(idUsuario).subscribe(
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
    console.log('Refresco de la pagina');
  }

  goToSelectedPet(data: Mascota){
    console.log(data);
    this.navCtrl.push('PetModalPage', {mascota: data});
  }

  goToCreatePet(){
    this.navCtrl.push('PetCreatePage');
  }
}
