import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { EstablishmentAdminPage } from '../establishment-admin/establishment-admin';
import { PetsAdminPage } from '../pets-admin/pets-admin';
import { SuppliesAdminPage } from '../supplies-admin/supplies';
import { DashboardAdminPage } from '../dashboard-admin/dashboard-admin';

@Component({
  templateUrl: 'tabs-admin.html',
})
export class TabsAdminPage {

  tab1Root = EstablishmentAdminPage;
  tab2Root = PetsAdminPage;
  tab3Root = SuppliesAdminPage;
  tab4Root = DashboardAdminPage;
  myIndex: number;
  constructor(navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
