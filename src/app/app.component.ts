import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';

//import { TabsAdminPage } from '../pages/tabs-admin/tabs-admin';
//import { EstablishmentAdminPage } from '../pages/establishment-admin/establishment-admin';
//import { PetsAdminPage } from '../pages/pets-admin/pets-admin';
//import { SuppliesAdminPage } from '../pages/supplies-admin/supplies';
//import { DashboardAdminPage } from '../pages/dashboard-admin/dashboard-admin';


//import { TabsPage } from '../pages/tabs/tabs';
//import { PetsPage } from '../pages/pets/pets';
//import { SuppliesPage } from '../pages/supplies/supplies-ad';
//import { EstablishmentsPage } from '../pages/establishments/establishments';
//import { AgendaPage } from '../pages/agenda/agenda';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';

/**
 * Interface that represent a page in menu bar.
 */
export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})

/**
 * Class that represent the initialize app.
 */
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: string = 'SlideIntroPage';
  //rootPage:any = SlideIntroPage;
  //rootPage:any = TabsPage;
  //rootPage: any = TabsAdminPage;
  //rootPage:any = EstablishmentAdminPage;
  //rootPage:any = AgendaPage;

  /**
   * Array that contents the options for a User.
   */
  pagesUser: PageInterface[] = [
    { title: 'Mascotas', name: 'TabsPage', component: 'TabsPage', tabComponent: 'PetsPage', index: 0, icon: 'paw' },
    { title: 'Suministros', name: 'TabsPage', component: 'TabsPage', tabComponent: 'SuppliesPage', index: 1, icon: 'filing' },
    { title: 'Establecimientos', name: 'TabsPage', component: 'TabsPage', tabComponent: 'EstablishmentsPage', index: 2, icon: 'medkit' },
    { title: 'Agenda', name: 'TabsPage', component: 'TabsPage', tabComponent: 'AgendaPage', index: 3, icon: 'paper' },
    { title: 'Configuracion', name: 'Settings', component: AboutPage, icon: 'settings' },
    { title: 'Salir', name: 'Exit', component: HomePage, icon: 'exit' }
  ];

  /**
   * Array that contents the options for a Admin.
   */
  pagesAdmin: PageInterface[] = [
    { title: 'Establecimiento', name: 'TabsAdminPage', component: 'TabsAdminPage', tabComponent: 'EstablishmentAdminPage', index: 0, icon: 'medkit' },
    { title: 'Mascotas', name: 'TabsAdminPage', component: 'TabsAdminPage', tabComponent: 'PetsAdminPage', index: 1, icon: 'paw' },
    { title: 'Suministros', name: 'TabsAdminPage', component: 'TabsAdminPage', tabComponent: 'SuppliesAdminPage', index: 2, icon: 'filing' },
    { title: 'Estadisticas', name: 'TabsAdminPage', component: 'TabsAdminPage', tabComponent: 'DashboardAdminPage', index: 3, icon: 'pie' },
    { title: 'Configuracion', name: 'Settings', component: AboutPage, icon: 'settings' },
    { title: 'Salir', name: 'Exit', component: HomePage, icon: 'exit' }
  ];

  /**
   * Make the app principal.
   * @param platform Platform app.
   * @param statusBar StatusBar for a menu.
   * @param splashScreen SlashScreen when the user move the screen.
   * @param global Global provider for validate the user login.
   */
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public global: GlobalProvider) {
    this.initializeApp();
  }

  /**
   * Initialize the app.
   */
  initializeApp() {
    console.log("Inicializando");
    this.platform.ready().then(() => {
      //this.statusBar.backgroundColorByHexString('#cc0000');
      this.statusBar.backgroundColorByHexString('#000000');
      this.splashScreen.hide();
      // this.statusBar.styleDefault();
      // if(this.platform.is('android')) {
      //   this.statusBar.overlaysWebView(false);
      //   this.statusBar.backgroundColorByHexString('#000000');
      // }
      //this.splashScreen.hide();
    });
  }

  /**
   * Get a boolean value to validate if the user was login.
   */
  getMenuEnabled(){
    return this.global.estado;
  }

  /**
   * Get a boolean value to validate the type user login.
   */
  getUserEnabledType(){
    return this.global.tipoUsuario === 'usuario' ? true : false;
  }

  /**
   * Set the page selected.
   * @param page Page selected by the user.
   */
  openPage(page: PageInterface) {
    let params = {};
    let namePage: string;
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // If tabs page is already active just change the tab index
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      namePage = page.name;
      if(namePage === 'Exit'){
        this.global.actulizarEstado(false);
        this.nav.setRoot('LoginPage');
      }
      else{
        this.nav.setRoot(page.component, params);
      }
    }
  }

  /**
   * Validate if the page was selected for change the actual color.
   * @param page Page selected by the user.
   */
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
