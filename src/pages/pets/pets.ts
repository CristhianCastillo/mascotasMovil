import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { PetCreatePage } from '../pets/pet-create/pet-create';
import { PetModalPage } from '../pets/pet-modal/pet-modal';
import { Mascota } from "../../models/mascota";

import { PetsServiceProvider } from '../../providers/pets-service/pets-service';

@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {

  public mascotas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public petsService: PetsServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsPage Primera Vez');
  }

  ionViewDidEnter(){
    this.petsService.getAllPets().subscribe(
      (data)=>{
        console.log(data);
        this.mascotas = data;
      },
      (error)=>{
        console.error(error);
      }
    )
    console.log('Refresco de la pagina');
  }

  goToSelectedPet(data: Mascota){
    console.log(data);
    this.navCtrl.push(PetModalPage, {mascota: data});
  }

  goToCreatePet(){
    this.navCtrl.push(PetCreatePage);
  }
}
