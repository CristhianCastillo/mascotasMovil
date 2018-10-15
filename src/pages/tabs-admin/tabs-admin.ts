import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

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
