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

  loginForm: FormGroup;
  login: any;
  recordar: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController
    , public serviceLogin: LoginServiceProvider, private formBuilder: FormBuilder, public alertController: AlertController ) {
    let backAction =  platform.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.pop();
      backAction();
    },2)
    this.loginForm = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private createForm(){
    return this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      recordarPassword : true
    });
  }

  validateForm(){
    const usuarioLogin = { 
      usuario: this.loginForm.value['usuario'],
      password: this.loginForm.value['password']
    };
    this.loginUser(usuarioLogin);
  }

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

  goResetPassword(){
    this.navCtrl.setRoot(StartPage);
  }

  goRegister(){
    this.navCtrl.push(StartPage);
  }  
}
