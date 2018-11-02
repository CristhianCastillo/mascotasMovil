import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PetsServiceProvider } from '../../../providers/pets-service/pets-service';
import { GlobalProvider } from '../../../providers/global/global';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-pet-create',
  templateUrl: 'pet-create.html',
})
export class PetCreatePage {
  @ViewChild('fileInput') fileInput;
  public typePets: any;
  public imagenPet: string;
  public petForm: FormGroup;
  public tipoMascotaAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
    public servicePet: PetsServiceProvider, private formBuilder: FormBuilder, public global: GlobalProvider,
    public camera: Camera) {
    this.tipoMascotaAlertOpts = {
      title: 'Tipo Mascotas',
      subTitle: 'Selecciona'
    };

    this.petForm = this.formBuilder.group({
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
        this.imagenPet = imageData;
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
      this.imagenPet = imageData.split(',')[1];
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(data:image/png;base64,' + this.imagenPet + ')'
  }

  getDataPet() {
    const id = this.global._id;
    const mascota = {
      idUsuario: id,
      imagen: this.imagenPet,
      nombre: this.petForm.value['nombre'],
      idTipo: this.petForm.value['tipoMascota'],
      genero: this.petForm.value['genero'],
      fechaNacimiento: this.petForm.value['fechaNacimiento'],
      raza: this.petForm.value['raza'],
      esterilizado: this.petForm.value['esterilizado'],
      color: this.petForm.value['color'],
      descripcion: this.petForm.value['descripcion']
    }
    this.createPet(mascota);
  }

  createPet(data) {
    this.servicePet.createPet(data).subscribe(
      (result: any) => {
        console.log(result);
        if (result.status) {
          this.showUserMessageCorrect("Un amigo tuyo acaba de ser creado.");
        }
        else {
          this.showUserMessageError("Ha ocurrido un error");
        }
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetCreatePage');
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
}
