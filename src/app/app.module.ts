import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

/**
 * Pages
 */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MessageModalPage } from '../pages/establishments/message-modal/message-modal';

/**
 * Http Client
 */
import { HttpClientModule } from "@angular/common/http";

/**
 * Error Handler
 */
import { GlobalErrorHandler } from '../providers/GlobalErrorHandler';

/**
 * Providers
 */
import { GlobalProvider } from '../providers/global/global';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { PetsServiceProvider } from '../providers/pets-service/pets-service';
import { RegisterProvider } from '../providers/register/register';
import { Camera } from '@ionic-native/camera';
import { AgendaProvider } from '../providers/agenda/agenda';
import { DashboardsProvider } from '../providers/dashboards/dashboards';
import { EstablishmentProvider } from '../providers/establishment/establishment';
import { PetsAdminProvider } from '../providers/pets-admin/pets-admin';
import { RequestsProvider } from '../providers/requests/requests';
import { SuppliesProvider } from '../providers/supplies/supplies';
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MessageModalPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MessageModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    GlobalProvider,
    LoginServiceProvider,
    PetsServiceProvider,
    RegisterProvider,
    Camera,
    AgendaProvider,
    DashboardsProvider,
    EstablishmentProvider,
    PetsAdminProvider,
    RequestsProvider,
    SuppliesProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
