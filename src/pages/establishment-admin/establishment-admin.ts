import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'page-establishment-admin',
  templateUrl: 'establishment-admin.html',
})
export class EstablishmentAdminPage {

  /**
   * Form register.
   */
  private editEstablishmentForm: FormGroup;
  public establecimiento: any = {
      id: 1,
      nit: 'QWE123TYU456',
      nombre: "Veterinaria Grecia",
      telefono: "321312332",
      direccion: "Crr 35 F 545 sur",
      email: "veterinariaGrecia@gmail.com",
      paginaWeb: "www.veterinariagrecia.com",
      servicios: ["Peluqueria", "Hospital"],
      horarios: "Establecido",
      horaInicial: "08:00",
      horaFinal: "22:00",
      descripcion: "Veterinaria para todo tipo de mascotas",
      habilitado: true
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder) {

    this.editEstablishmentForm = this.formBuilder.group({
      nombre : [this.establecimiento.nombre, Validators.required],
      telefono: [this.establecimiento.telefono],
      direccion: [this.establecimiento.direccion],
      email: [this.establecimiento.email],
      paginaWeb: [this.establecimiento.paginaWeb],
      servicios: [this.establecimiento.servicios, Validators.required],
      horarios: [this.establecimiento.horarios],
      horaInicial: [this.establecimiento.horaInicial],
      horaFinal: [this.establecimiento.horaFinal],
      descripcion: [this.establecimiento.descripcion, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentAdminPage');
  }

  getDataEstablishment(){
    const establecimiento = {
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

  editEstablishment(establishment){
    this.showUserMessageCorrect("Establecimiento actualizado correctamente.");
    // this.servicePet.createPet(data).subscribe(
    //   (result: Mascota) =>{
    //     console.log(result);
    //     if(result){
    //       this.userMessageCorrect("Un amigo tuyo acaba de ser creado.");
    //     }
    //     else{
    //       this.userMessageError("Ha ocurrido un error");
    //     }
    //   }
    // );
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
