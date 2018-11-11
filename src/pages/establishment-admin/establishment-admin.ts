import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EstablishmentProvider } from '../../providers/establishment/establishment';
import { GlobalProvider } from "../../providers/global/global";
import { Observable } from 'rxjs';
import { Establecimiento } from '../../models/establecimiento';
import {tap} from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AgendaProvider } from "../../providers/agenda/agenda";

@IonicPage()
@Component({
  selector: 'page-establishment-admin',
  templateUrl: 'establishment-admin.html',
})


export class EstablishmentAdminPage {
  @ViewChild('fileInput') fileInput;
  /**
   * Form register.
   */
  private editEstablishmentForm: FormGroup;
  public establecimiento: Observable<Establecimiento>;
  public imagen: any;
  public idEstablecimiento: string;
  public services: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
    private formBuilder: FormBuilder, private service: EstablishmentProvider,
    public global: GlobalProvider, public camera: Camera, private agendaService: AgendaProvider) {
      this.editEstablishmentForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        telefono: [''],
        direccion: [''],
        email: [''],
        paginaWeb: [''],
        servicios: ['', Validators.required],
        horarios: [''],
        horaInicial: [''],
        horaFinal: [''],
        descripcion: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentAdminPage');
    const idUsuario: string = this.global._id;
    this.establecimiento = this.service.getEstablishment(idUsuario).pipe(
      tap(estable => this.editEstablishmentForm.patchValue(estable))
    ); 

    this.establecimiento.subscribe(
      (result: any) =>{
        this.idEstablecimiento = result.id;
        this.imagen = result.imagen;
      }
    );

    this.agendaService.getServicesType().subscribe(
      (result: any ) => {
        this.services = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ionViewDidEnter(){

  }

  getDataEstablishment() {
    const establecimiento = {
      imagen: this.imagen,
      nombre: this.editEstablishmentForm.value['nombre'],
      telefono: this.editEstablishmentForm.value['telefono'],
      direccion: this.editEstablishmentForm.value['direccion'],
      email: this.editEstablishmentForm.value['email'],
      paginaWeb: this.editEstablishmentForm.value['paginaWeb'],
      servicios: this.editEstablishmentForm.value['servicios'],
      horarios: this.editEstablishmentForm.value['horarios'],
      horaInicial: this.editEstablishmentForm.value['horaInicial'],
      horaFinal: this.editEstablishmentForm.value['horaFinal'],
      descripcion: this.editEstablishmentForm.value['descripcion']
    }
    this.editEstablishment(establecimiento);
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
        this.imagen = imageData;
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
      this.imagen = imageData.split(',')[1];
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(data:image/png;base64,' + this.imagen + ')'
  }

  editEstablishment(establishment) {
    this.service.updateEstablishment(this.idEstablecimiento, establishment).subscribe(
      (result: any) =>{
        console.log(result);
        if(result.status){
          this.showUserMessageCorrect("Establecimiento actualizado correctamente");
        }
        else{
          this.showUserMessageError("No se ha podido actualizar el establecmiento");
        }
      }
    );
    console.log(establishment);
  }

  showUserMessageCorrect(mensaje: string) {
    let alert = this.alertController.create({
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
