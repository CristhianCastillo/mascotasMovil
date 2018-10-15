import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Suministro } from "../../../models/suministro";

@IonicPage()
@Component({
  selector: 'page-supplies-ad-modal',
  templateUrl: 'supplies-ad-modal.html',
})
export class SuppliesModalPageAdmin {

  /**
   * Form register.
   */
  private editSupplieForm: FormGroup;
  public detalle: Suministro;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder) {
    this.detalle = <Suministro>this.navParams.get('detalle');
    console.log(this.detalle);
    this.editSupplieForm = this.formBuilder.group({
      tipoSuministro: [this.detalle.tipoSuministro, Validators.required],
      nombre: [this.detalle.nombre, Validators.required],
      cantidad: [this.detalle.cantidad, Validators.required],
      unidadMedida: [this.detalle.unidadMedida, Validators.required],
      fecha: [this.detalle.fecha, Validators.required],
      precio: [this.detalle.precio, Validators.required],
      proveedor: [this.detalle.proveedor, Validators.required],
      comentario: [this.detalle.comentario, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesModalPage');
  }

  getDataSupplie(){
    const suministro = {
      tipoSuministro: this.editSupplieForm.value['tipoSuministro'],
      nombre: this.editSupplieForm.value['nombre'],
      cantidad: this.editSupplieForm.value['cantidad'],
      unidadMedida: this.editSupplieForm.value['unidadMedida'],
      fecha: this.editSupplieForm.value['fecha'],
      precio: this.editSupplieForm.value['precio'],
      proveedor: this.editSupplieForm.value['proveedor'],
      consumoDiario: '',
      comentario: this.editSupplieForm.value['comentario'],
      idUsuario: 1
    }
    this.editSupplie(suministro);
  }

  editSupplie(suministro){
    this.showUserMessageCorrect("Suministro actualizado correctamente.");
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
    console.log(suministro);
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

  deleteAlertSupplie() {
    let alert = this.alertController.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar esta suministro?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          let alert1 = this.alertController.create({
            title: 'Eliminar',
            message: 'Suministro eliminado',
            buttons: [{
              text: 'Aceptar',
              handler: () => {
                this.navCtrl.pop();
              }
            }]
          });
          alert1.present();
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
