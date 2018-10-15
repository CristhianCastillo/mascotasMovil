import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Mascota } from "../../../models/mascota";
import { PetsServiceProvider } from '../../../providers/pets-service/pets-service';

@IonicPage()
@Component({
  selector: 'page-pet-modal',
  templateUrl: 'pet-modal.html',
})
export class PetModalPage {

  private petForm: FormGroup;
  public mascota : Mascota;
  public tipoMascotaAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertController: AlertController,
    public servicePet: PetsServiceProvider, private formBuilder: FormBuilder) {
    this.tipoMascotaAlertOpts = {
      title: 'Tipo Mascotas',
      subTitle: 'Selecciona'
    };

    this.mascota = this.navParams.get('mascota');
    this.petForm = this.formBuilder.group({
      nombre: [this.mascota.nombre, Validators.required],
      tipoMascota: [this.mascota.tipoMascota, Validators.required],
      genero: [this.mascota.genero, Validators.required],
      fechaNacimiento: [this.mascota.fechaNacimiento, Validators.required],
      raza: [this.mascota.raza, Validators.required],
      esterilizado: [this.mascota.esterilizado, Validators.required],
      color: [this.mascota.color, Validators.required],
      descripcion: [this.mascota.descripcion, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetModalPage');
  }

  getDataPet() {
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
    this.updatePet(mascota);
  }

  updatePet(data) {
    this.servicePet.updatePet(this.mascota.id, data).subscribe(
      (result: boolean) => {
        console.log(result);
        if (result) {
          this.showUserMessageCorrect("Un amigo tuyo acaba de ser actualizado.");
        }
        else {
          this.showUserMessageError("Ha ocurrido un error");
        }
      }
    );
  }

  deletePet() {
    this.servicePet.deletePet(this.mascota.id).subscribe(
      (result: boolean) => {
        console.log(result);
        if (result) {
          this.showUserMessageCorrect("Mascota Eliminada");
        }
        else {
          this.showUserMessageError("Ha ocurrido un error");
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

  showAlertDeletePet() {
    let alert = this.alertController.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar esta mascota?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
            this.deletePet();
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log("Operación cancelada");
        }
      }
      ]
    });
    alert.present();
  }
}
