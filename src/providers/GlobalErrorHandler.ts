import { ErrorHandler, Inject } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    @Inject(AlertController) private alerts: AlertController,
    @Inject(SplashScreen) public splashScreen: SplashScreen
  ) {}

  async handleError(error) {
    const alert = this.alerts.create({
      title: 'Upsss!!',
      subTitle: 'Estamos presentando problemas, intentalo más tarde',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            // this.splashScreen.show();
            // window.location.reload();
          }
        }
      ]
    });
    alert.present();
  }
}