import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

//import { PetsPage } from '../pets/pets';
//import { SuppliesPage } from '../supplies/supplies';
//import { EstablishmentsPage } from '../establishments/establishments';
//import { AgendaPage } from '../agenda/agenda';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = 'PetsPage';
  public tab2Root = 'SuppliesPage';
  public tab3Root = 'EstablishmentsPage';
  public tab4Root = 'AgendaPage';
  public myIndex: number;
  constructor(navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
