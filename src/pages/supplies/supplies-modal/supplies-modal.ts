import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Suministro } from "../../../models/suministro";
import { SuppliesProvider } from '../../../providers/supplies/supplies';

@IonicPage()
@Component({
  selector: 'page-supplies-modal',
  templateUrl: 'supplies-modal.html',
})
export class SuppliesModalPage {

  /**
   * Form register.
   */
  private editSupplieForm: FormGroup;
  public detalle: Suministro;
  public services: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder, private serviceSupplie:SuppliesProvider) {
    this.detalle = <Suministro>this.navParams.get('detalle');
    console.log(this.detalle);
    this.editSupplieForm = this.formBuilder.group({
      tipoSuministro: [this.detalle.idTipo, Validators.required],
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
    this.serviceSupplie.getTypeSupplies().subscribe(
      (data) => {
        console.log(data);
        this.services = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDataSupplie(){
    const suministro = {
      idTipo: this.editSupplieForm.value['tipoSuministro'],
      nombre: this.editSupplieForm.value['nombre'],
      cantidad: this.editSupplieForm.value['cantidad'],
      unidad: this.editSupplieForm.value['unidadMedida'],
      fechaCompra: this.editSupplieForm.value['fecha'],
      precio: this.editSupplieForm.value['precio'],
      proveedor: this.editSupplieForm.value['proveedor'],
      comentario: this.editSupplieForm.value['comentario']
    }
    this.editSupplie(suministro);
  }

  editSupplie(suministro){
    this.serviceSupplie.updateSupplie(suministro, this.detalle.id).subscribe(
      (result: any) => {
        console.log(result);
        if (result.status) {
          this.showUserMessageCorrect('Suministro actualizado correctamente.')
        } else {
          this.showUserMessageError('No se ha podido actualizar el producto.');
        }
      }
    );
    console.log(suministro);
  }

  deleteSupplie(){
    this.serviceSupplie.deleteSuppplie(this.detalle.id).subscribe(
      (result: any) => {
        console.log(result);
        if (result.status) {
         this.showUserMessageCorrect('Suministro eliminado correctamente.');
        } else {
          this.showUserMessageError('No se ha podido eliminar el suministro.');
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

  deleteAlertSupplie() {
    let alert = this.alertController.create({
      title: 'Eliminar',
      message: '¿Deseas eliminar esta suministro?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.deleteSupplie();
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
