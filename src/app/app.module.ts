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
import { TabsAdminPage } from '../pages/tabs-admin/tabs-admin'; 
import { StartPage } from '../pages/start/start';
import { SlideIntroPage} from "../pages/slide-intro/slide-intro";
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RegisterAdminPage } from '../pages/register-admin/register-admin';
import { PetCreatePage } from '../pages/pets/pet-create/pet-create';
import { PetModalPage } from '../pages/pets/pet-modal/pet-modal';
import { ChoosePetPage } from '../pages/agenda/choose-pet/choose-pet';
import { AgendaCreatePage } from '../pages/agenda/agenda-create/agenda-create';
import { AgendaModalPage } from '../pages/agenda/agenda-modal/agenda-modal';
import { EstablishmentsSavedModalPage } from '../pages/establishments/establishments-saved-modal/establishments-saved-modal';
import { MessageModalPage } from '../pages/establishments/message-modal/message-modal';
import { EstablishmentsSearchPage } from '../pages/establishments/establishments-search/establishments-search';
import { SuppliesCreatePage } from '../pages/supplies/supplies-create/supplies-create';
import { SuppliesModalPage } from '../pages/supplies/supplies-modal/supplies-modal';

import { EstablishmentAdminPage } from '../pages/establishment-admin/establishment-admin';
import { PetsAdminPage } from '../pages/pets-admin/pets-admin';
import { SuppliesAdminPage } from '../pages/supplies-admin/supplies';
import { DashboardAdminPage } from '../pages/dashboard-admin/dashboard-admin';
import { PetsOwnerPage } from '../pages/pets-admin/pets-owner/pets-owner';
import { PetServicesPage } from '../pages/pets-admin/pet-services/pet-services';
import { SuppliesCreatePageAdmin } from '../pages/supplies-admin/supplies-create/supplies-create';
import { SuppliesModalPageAdmin } from '../pages/supplies-admin/supplies-modal/supplies-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';

import { HttpClientModule } from "@angular/common/http";

import { LoginServiceProvider } from '../providers/login-service/login-service';
import { PetsServiceProvider } from '../providers/pets-service/pets-service';

import { GlobalErrorHandler } from '../providers/GlobalErrorHandler';

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
    EstablishmentsSavedModalPage,
    MessageModalPage,
    EstablishmentsSearchPage,
    SuppliesCreatePage,
    SuppliesModalPage,
    RegisterAdminPage,
    TabsAdminPage,EstablishmentAdminPage,PetsAdminPage,SuppliesAdminPage,DashboardAdminPage,PetsOwnerPage,PetServicesPage,
    SuppliesCreatePageAdmin,SuppliesModalPageAdmin
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
    EstablishmentsSavedModalPage,
    MessageModalPage,
    EstablishmentsSearchPage,
    SuppliesCreatePage,
    SuppliesModalPage,
    RegisterAdminPage,
    TabsAdminPage,EstablishmentAdminPage,PetsAdminPage,SuppliesAdminPage,DashboardAdminPage,PetsOwnerPage,PetServicesPage,
    SuppliesCreatePageAdmin,SuppliesModalPageAdmin
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    GlobalProvider,
    LoginServiceProvider,
    PetsServiceProvider
  ]
})
export class AppModule {}
