import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { PetsPage } from '../pages/pets/pets';
import { SuppliesPage } from '../pages/supplies/supplies';
import { EstablishmentsPage } from '../pages/establishments/establishments';
import { AgendaPage } from '../pages/agenda/agenda';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { SlideIntroPage} from "../pages/slide-intro/slide-intro";
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PetCreatePage } from '../pages/pets/pet-create/pet-create';
import { PetModalPage } from '../pages/pets/pet-modal/pet-modal';
import { ChoosePetPage } from '../pages/agenda/choose-pet/choose-pet';
import { AgendaCreatePage } from '../pages/agenda/agenda-create/agenda-create';
import { AgendaModalPage } from '../pages/agenda/agenda-modal/agenda-modal';
import { EstablishmentsSavedModalPage } from '../pages/establishments/establishments-saved-modal/establishments-saved-modal';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StartPage,
    SlideIntroPage,
    LoginPage,
    RegisterPage,
    PetsPage,
    SuppliesPage,
    EstablishmentsPage,
    AgendaPage,
    PetCreatePage,
    PetModalPage,
    ChoosePetPage,
    AgendaCreatePage,
    AgendaModalPage,
    EstablishmentsSavedModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StartPage,
    SlideIntroPage,
    LoginPage,
    RegisterPage,
    PetsPage,
    SuppliesPage,
    EstablishmentsPage,
    AgendaPage,
    PetCreatePage,
    PetModalPage,
    ChoosePetPage,
    AgendaCreatePage,
    AgendaModalPage,
    EstablishmentsSavedModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
