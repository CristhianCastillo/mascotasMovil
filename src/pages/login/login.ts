import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { LoginServiceProvider }  from '../../providers/login-service/login-service';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  /**
   * Login Form.
   */
  private loginForm: FormGroup;

  /**
   * Validate remember password.
   */
  public recordar: boolean;

  /**
   *
   * @param navCtrl
   * @param navParams
   * @param platform
   * @param loadingCtrl
   * @param serviceLogin
   * @param formBuilder
   * @param alertController
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public loadingCtrl: LoadingController
    , public serviceLogin: LoginServiceProvider, private formBuilder: FormBuilder, public alertController: AlertController ) {
    let backAction =  platform.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.pop();
      backAction();
    },2)
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      recordarPassword : true
    });
  }

  /**
   * Event when did load the page.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /**
   * Get data from the form.
   */
  getDataForm(){
    const usuarioLogin = { 
      usuario: this.loginForm.value['usuario'],
      password: this.loginForm.value['password']
    };
    this.loginUser(usuarioLogin);
  }

  /**
   * Make the authentification login with a REST service.
   * @param data User from the login.
   */
  loginUser(data){
    const loader = this.loadingCtrl.create({
      content: "Verificando..."
    });
    loader.present();
    this.serviceLogin.loginUser(data).subscribe(
      (result: boolean) =>{
        console.log(result);
        if(result){
          loader.dismiss();
          this.navCtrl.setRoot(TabsPage);
        }
        else{
          loader.dismiss();
          this.showMessageNoEnter("Usuario y/o password incorrectos");
        }
      }
    );
  }

  /**
   * Show a alert Controller when error comes.
   * @param mensaje Message from the error.
   */
  showMessageNoEnter(mensaje: string) {
    let alert = this.alertController.create({
      title: 'Error',
      message: mensaje,
      buttons: [{
        text: 'Aceptar'
      }]
    });
    alert.present()
  }

  /**
   * Go to reset password.
   */
  goResetPassword(){
    this.navCtrl.setRoot(StartPage);
  }

  /**
   * Go to register page.
   */
  goRegisterPage(){
    this.navCtrl.push(StartPage);
  }  
}
