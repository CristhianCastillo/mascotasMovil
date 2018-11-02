import {Component, ViewChild} from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Mascota } from "../../../models/mascota";
import { PetsServiceProvider } from '../../../providers/pets-service/pets-service';
import { GlobalProvider } from '../../../providers/global/global';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-pet-modal',
  templateUrl: 'pet-modal.html',
})
export class PetModalPage {
  @ViewChild('fileInput') fileInput;
  public typePets: any;
  private petForm: FormGroup;
  public mascota : Mascota;
  public tipoMascotaAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertController: AlertController,
    public servicePet: PetsServiceProvider, private formBuilder: FormBuilder, public global: GlobalProvider,
              public camera: Camera) {
    this.tipoMascotaAlertOpts = {
      title: 'Tipo Mascotas',
      subTitle: 'Selecciona'
    };

    this.mascota = this.navParams.get('mascota');
    const esterilizado: string = this.mascota.esterilizado === true ? 'Si' : 'No';
    this.petForm = this.formBuilder.group({
      nombre: [this.mascota.nombre, Validators.required],
      tipoMascota: [this.mascota.idTipo, Validators.required],
      genero: [this.mascota.genero, Validators.required],
      fechaNacimiento: [this.mascota.fechaNacimiento.split('T')[0], Validators.required],
      raza: [this.mascota.raza, Validators.required],
      esterilizado: [esterilizado, Validators.required],
      color: [this.mascota.color, Validators.required],
      descripcion: [this.mascota.descripcion, Validators.required]
    });
  }

  ionViewDidLoad() {
    this.servicePet.getTypePets().subscribe(
      (data) => {
        console.log(data);
        this.typePets = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    if (Camera['installed']()) {
      this.camera.getPicture(options).then((imageData) => {
        //this.imagenPet = 'data:image/png;base64,' + imageData;
        this.mascota.imagen = imageData;
      }, (err) => {
        // Handle error
      });
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    console.log("Get web Imagen.....");
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      console.log(imageData.split(',')[1]);
      this.mascota.imagen = imageData.split(',')[1];
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(data:image/png;base64,' + this.mascota.imagen + ')'
  }

  getDataPet() {
    const mascota = {
      imagen: this.mascota.imagen,
      nombre: this.petForm.value['nombre'],
      idTipo: this.petForm.value['tipoMascota'],
      genero: this.petForm.value['genero'],
      fechaNacimiento: this.petForm.value['fechaNacimiento'],
      raza: this.petForm.value['raza'],
      esterilizado: this.petForm.value['esterilizado'],
      color: this.petForm.value['color'],
      descripcion: this.petForm.value['descripcion'],
    }
    this.updatePet(mascota);
  }

  updatePet(data) {
    this.servicePet.updatePet(this.mascota.id, data).subscribe(
      (result: any) => {
        console.log(result);
        if (result.status) {
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
      (result: any) => {
        console.log(result);
        if (result.status) {
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
