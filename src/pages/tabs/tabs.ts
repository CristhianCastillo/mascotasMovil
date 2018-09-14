import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { PetsPage } from '../pets/pets';
import { SuppliesPage } from '../supplies/supplies';
import { EstablishmentsPage } from '../establishments/establishments';
import { AgendaPage } from '../agenda/agenda';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PetsPage;
  tab2Root = SuppliesPage;
  tab3Root = EstablishmentsPage;
  tab4Root = AgendaPage;
  myIndex: number;
  constructor(navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
