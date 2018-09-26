import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PetsServiceProvider } from '../../../providers/pets-service/pets-service';

@Component({
  selector: 'page-pet-modal',
  templateUrl: 'pet-modal.html',
})
export class PetModalPage {

  petForm: FormGroup;
  tipoMascotaAlertOpts: { title: string, subTitle: string };

  id: number;
  imagen: string;
  nombre: string;
  tipoMascota: string;
  genero: string;
  fechaNacimiento: string;
  raza: string;
  esterilizado: string;
  color: string;
  descripcion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertController: AlertController,
    public servicePet: PetsServiceProvider, private formBuilder: FormBuilder) {
    this.tipoMascotaAlertOpts = {
      title: 'Tipo Mascotas',
      subTitle: 'Selecciona'
    };

    this.id = this.navParams.get('id');
    this.imagen = this.navParams.get('imagen');
    this.nombre = this.navParams.get('nombre');
    this.tipoMascota = this.navParams.get('tipoMascota');
    this.genero = this.navParams.get('genero');
    this.fechaNacimiento = this.navParams.get('fechaNacimiento');
    this.raza = this.navParams.get('raza');
    this.esterilizado = this.navParams.get('esterilizado');
    this.color = this.navParams.get('color');
    this.descripcion = this.navParams.get('descripcion');

    this.petForm = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      tipoMascota: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      raza: ['', Validators.required],
      esterilizado: ['', Validators.required],
      color: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  updateData() {
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
    this.servicePet.updatePet(this.id, data).subscribe(
      (result: boolean) => {
        console.log(result);
        if (result) {
          this.userMessageCorrect("Un amigo tuyo acaba de ser actualizado.");
        }
        else {
          this.userMessageError("Ha ocurrido un error");
        }
      }
    );
  }

  deletePet() {
    this.servicePet.deletePet(this.id).subscribe(
      (result: boolean) => {
        console.log(result);
        if (result) {
          this.userMessageCorrect("Mascota Eliminada");
        }
        else {
          this.userMessageError("Ha ocurrido un error");
        }
      }
    );
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

  deleteAlert() {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetModalPage');
  }

  stpSelect() {
    console.log('STP selected');
  }

}
