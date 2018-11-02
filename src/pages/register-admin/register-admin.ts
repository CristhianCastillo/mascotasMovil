import { Component } from '@angular/core';
import { NavController, NavParams, Platform, MenuController, IonicPage } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { RegistrationValidator } from "../../validators/RegistrationValidator";
import { RegisterProvider } from '../../providers/register/register';

@IonicPage()
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
  public global: GlobalProvider, private formBuilder: FormBuilder, private alertController: AlertController,
              private menu: MenuController, private service: RegisterProvider) {
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

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }

  /**
   *
   */
  getDataUser(){
    const user = {
      nombreUsuario: this.registerForm.value['nombreUsuario'],
      nombres: this.registerForm.value['nombres'],
      apellidos: this.registerForm.value['apellidos'],
      email: this.registerForm.value['emailUsuario'],
      establecimiento: this.registerForm.value['nombreEstablecimiento'],
      nit: this.registerForm.value['nitEstablecimiento'],
      descripcion: this.registerForm.value['descripcionEstablecimiento'],
      password: this.passwordFormGroup.value['password']
    }
    this.createUser(user);
  }

  /**
   *
   * @param user
   */
  createUser(user){
    const loader = this.loadingCtrl.create({
      content: "Verificando..."
    });
    loader.present();
    this.service.createUserOwner(user).subscribe(
      (result: any) => {
        console.log(result);
        if (result.status) {
          loader.dismiss();
          this.showUserMessageCorrect("Genial, por favor ingresa a la aplicación.");
        }
        else {
          loader.dismiss();
          const message = result.message;
          switch(message){
            case 'UserName':
            this.showUserMessageError("El nombre de usuario ya se encuentra en uso.");
            break;
            case 'Email':
            this.showUserMessageError("El email seleccionado ya esta registrado.");
            break;
            case 'Establishment':
            this.showUserMessageError("El nombre del establecimiento ya esta registrado.");
            break;
            case 'Nit':
            this.showUserMessageError("El nit del establecimiento ya esta registrado.");
          }
        }
      },
      (err) => {
        loader.dismiss();
        this.showUserMessageError(err.message);
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
