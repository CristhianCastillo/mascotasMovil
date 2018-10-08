import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsAdminPage } from '../tabs-admin/tabs-admin';
import { GlobalProvider } from '../../providers/global/global';

import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { RegistrationValidator } from "../../validators/RegistrationValidator";

@Component({
  selector: 'page-register-admin',
  templateUrl: 'register-admin.html',
})
export class RegisterAdminPage {

  /**
   * Form register.
   */
  private registerForm: FormGroup;

  /**
   * SubForm to validate confirm password.
   */
  private passwordFormGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController,
  public global: GlobalProvider, private formBuilder: FormBuilder, private alertController: AlertController) {
    let backAction =  platform.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.pop();
      backAction();
    },2);

    this.passwordFormGroup = this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {validator: RegistrationValidator.validatePasswords('password', 'confirmPassword')})
    this.registerForm = this.formBuilder.group({
      nombreUsuario : ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      emailUsuario: ['', Validators.compose([Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      nombreEstablecimiento: ['', Validators.required],
      nitEstablecimiento: ['', Validators.required],
      descripcionEstablecimiento: ['', Validators.required],
      passwordFormGroup : this.passwordFormGroup,
      terminosCondiciones: [false, Validators.requiredTrue]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAdminPage');
  }

  /**
   *
   */
  getDataUser(){
    const user = {
      nombreUsuario: this.registerForm.value['nombreUsuario'],
      nombres: this.registerForm.value['nombres'],
      apellidos: this.registerForm.value['apellidos'],
      emailUsuario: this.registerForm.value['emailUsuario'],
      nombreEstablecimiento: this.registerForm.value['nombreEstablecimiento'],
      nitEstablecimiento: this.registerForm.value['nitEstablecimiento'],
      descripcionEstablecimiento: this.registerForm.value['descripcionEstablecimiento'],
      password: this.passwordFormGroup.value['password']
    }
    this.createUser(user);
  }

  /**
   *
   * @param user
   */
  createUser(user){
    this.userMessageCorrect("Cuenta creada con exito revisa tu correo electronico.");
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
    console.log(user);
  }

  userMessageCorrect(mensaje: string) {
    let alert = this.alertController.create({
      title: 'Mensaje',
      message: mensaje,
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.goPrincipalMenu();
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

  goPrincipalMenu(){
    this.global.set('AdminUsuario');
    const loader = this.loadingCtrl.create({
      content: "Por favor espera...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.setRoot(TabsAdminPage);
    loader.dismiss();
  }

}
