import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'page-supplies-create',
  templateUrl: 'supplies-create.html',
})
export class SuppliesCreatePage {

  /**
   * Form register.
   */
  private registerSupplieForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,
              private formBuilder: FormBuilder) {
    this.registerSupplieForm = this.formBuilder.group({
      tipoSuministro: ['', Validators.required],
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required],
      unidadMedida: ['', Validators.required],
      fecha: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required],
      consumoDiario: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesCreatePage');
  }

  getDataSupplie(){
    const suministro = {
      tipoSuministro: this.registerSupplieForm.value['tipoSuministro'],
      nombre: this.registerSupplieForm.value['nombre'],
      cantidad: this.registerSupplieForm.value['cantidad'],
      unidadMedida: this.registerSupplieForm.value['unidadMedida'],
      fecha: this.registerSupplieForm.value['fecha'],
      precio: this.registerSupplieForm.value['precio'],
      proveedor: this.registerSupplieForm.value['proveedor'],
      consumoDiario: this.registerSupplieForm.value['consumoDiario'],
      comentario: this.registerSupplieForm.value['comentario'],
      idUsuario: 1
    }
    this.createSupplie(suministro);
  }

  createSupplie(suministro){
    this.showUserMessageCorrect("Suministro ingresado correctamente.");
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
}
