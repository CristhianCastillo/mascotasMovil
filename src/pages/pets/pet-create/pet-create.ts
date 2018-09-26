import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PetsServiceProvider } from '../../../providers/pets-service/pets-service';
import { Mascota } from '../../../models/mascota';

@Component({
  selector: 'page-pet-create',
  templateUrl: 'pet-create.html',
})
export class PetCreatePage {

  petForm: FormGroup;
  tipoMascotaAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
    public servicePet: PetsServiceProvider, private formBuilder: FormBuilder) {
    this.tipoMascotaAlertOpts = {
      title: 'Tipo Mascotas',
      subTitle: 'Selecciona'
    };

    this.petForm = this.createForm();
  }

  private createForm(){
    return this.formBuilder.group({
      nombre : ['', Validators.required],
      tipoMascota: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      raza: ['', Validators.required],
      esterilizado: ['', Validators.required],
      color: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  saveData(){
      const mascota = {
        imagen: '../../assets/imgs/pet - default.png',
        nombre: this.petForm.value['nombre'],
        tipoMascota: this.petForm.value['tipoMascota'],
        genero: this.petForm.value['genero'],
        fechaNacimiento: this.petForm.value['fechaNacimiento'],
        raza: this.petForm.value['raza'],
        esterilizado: this.petForm.value['esterilizado'],
        color: this.petForm.value['color'],
        descripcion: this.petForm.value['descripcion'],
        idDuenio: 2
      }
      this.createPet(mascota);
  }

  createPet(data){
    this.servicePet.createPet(data).subscribe(
      (result: Mascota) =>{
        console.log(result);
        if(result){
          this.userMessageCorrect("Un amigo tuyo acaba de ser creado.");
        }
        else{
          this.userMessageError("Ha ocurrido un error");
        }
      }
    );
  }

  stpSelect() {
    console.log('STP selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetCreatePage');
  }

  userMessageCorrect(mensaje: string) {
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

  userMessageError(mensaje: string) {
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
