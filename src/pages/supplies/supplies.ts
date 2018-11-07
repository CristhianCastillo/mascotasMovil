import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Suministro } from "../../models/suministro";
import { GlobalProvider } from '../../providers/global/global';
import { SuppliesProvider } from '../../providers/supplies/supplies';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-supplies',
  templateUrl: 'supplies.html',
})
export class SuppliesPage {

  public suministros: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private global : GlobalProvider, private service: SuppliesProvider, private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuppliesPage');
  }

  ionViewDidEnter(){
    const loader = this.loadingController.create({
      content: 'Actualizando...'
    });
    loader.present();
    this.service.getAllSupplies(this.global._id).subscribe(
      (data) => {
        this.suministros = data;
        loader.dismiss();
      },
      (error) => {
        console.error(error);
        loader.dismiss();
      }
    );
  }

  goToCreateSupplie(){
    this.navCtrl.push('SuppliesCreatePage');
  }

  goToViewSupplie(detalle: Suministro){
    this.navCtrl.push('SuppliesModalPage', {detalle: detalle});
  }
}
