import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
//import { EstablishmentAdminPage } from '../establishment-admin/establishment-admin';
//import { PetsAdminPage } from '../pets-admin/pets-admin';
//import { SuppliesAdminPage } from '../supplies-admin/supplies';
//import { DashboardAdminPage } from '../dashboard-admin/dashboard-admin';

@IonicPage()
@Component({
  templateUrl: 'tabs-admin.html',
})
export class TabsAdminPage {

  public tab1Root = 'EstablishmentAdminPage';
  public tab2Root = 'PetsAdminPage';
  public tab3Root = 'SuppliesAdminPage';
  public tab4Root = 'DashboardAdminPage';
  public myIndex: number;
  constructor(navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
