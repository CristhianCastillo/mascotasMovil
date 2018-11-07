import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { SuppliesProvider } from '../../../providers/supplies/supplies';
import { GlobalProvider } from '../../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-supplies-ad-create',
  templateUrl: 'supplies-ad-create.html',
})
export class SuppliesCreatePageAdmin {

  /**
   * Form register.
   */
  private registerSupplieForm: FormGroup;
  public services: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder, private global: GlobalProvider, private serviceSupplie: SuppliesProvider) {
    this.registerSupplieForm = this.formBuilder.group({
      tipoSuministro: ['', Validators.required],
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required],
      unidadMedida: ['', Validators.required],
      fecha: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesCreatePage');
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
      idTipo: this.registerSupplieForm.value['tipoSuministro'],
      nombre: this.registerSupplieForm.value['nombre'],
      cantidad: this.registerSupplieForm.value['cantidad'],
      unidad: this.registerSupplieForm.value['unidadMedida'],
      fechaCompra: this.registerSupplieForm.value['fecha'],
      precio: this.registerSupplieForm.value['precio'],
      proveedor: this.registerSupplieForm.value['proveedor'],
      comentario: this.registerSupplieForm.value['comentario']
    }
    this.createSupplie(suministro);
  }

  createSupplie(suministro){
    this.serviceSupplie.addSupplie(suministro, this.global.id).subscribe(
      (result: any) => {
        console.log(result);
        if (result.status) {
          this.showUserMessageCorrect('Suministro agregado correctamente.')
        } else {
          this.showUserMessageError('No se ha podido agregar el producto.');
        }
      }
    );
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
}
