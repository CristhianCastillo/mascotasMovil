import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { SlideIntroPage} from "../pages/slide-intro/slide-intro";

import { TabsPage } from '../pages/tabs/tabs';
import { PetsPage } from '../pages/pets/pets';
import { SuppliesPage } from '../pages/supplies/supplies';
import { EstablishmentsPage } from '../pages/establishments/establishments';
import { AgendaPage } from '../pages/agenda/agenda';

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
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = SlideIntroPage;

  pages: PageInterface[] = [
    { title: 'Mascotas', name: 'TabsPage', component: TabsPage, tabComponent: PetsPage, index: 0, icon: 'paw' },
    { title: 'Suministros', name: 'TabsPage', component: TabsPage, tabComponent: SuppliesPage, index: 1, icon: 'filing' },
    { title: 'Establecimientos', name: 'TabsPage', component: TabsPage, tabComponent: EstablishmentsPage, index: 2, icon: 'medkit' },
    { title: 'Agenda', name: 'TabsPage', component: TabsPage, tabComponent: AgendaPage, index: 3, icon: 'paper' }
  ];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

     // used for an example of ngFor and navigation
     
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // If tabs page is already active just change the tab index
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.component, params);
    }
  }
 
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
