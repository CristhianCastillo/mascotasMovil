import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
//import { PetCreatePage } from '../pets/pet-create/pet-create';
//import { PetModalPage } from '../pets/pet-modal/pet-modal';
import { Mascota } from "../../models/mascota";
import { LoadingController } from 'ionic-angular';

import { PetsServiceProvider } from '../../providers/pets-service/pets-service';

@IonicPage()
@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {

  public mascotas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public petsService: PetsServiceProvider,
              private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsPage Primera Vez');
  }

  ionViewDidEnter(){
    const loader = this.loadingController.create({
      content: 'Actualizando...'
    });
    loader.present();
    this.petsService.getAllPets().subscribe(
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
