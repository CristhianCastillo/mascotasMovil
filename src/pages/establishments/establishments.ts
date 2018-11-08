import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Establecimiento } from "../../models/establecimiento";
import { DomSanitizer } from '@angular/platform-browser';
import { EstablishmentProvider } from '../../providers/establishment/establishment';
import { LoadingController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { RequestsProvider } from '../../providers/requests/requests';

@IonicPage()
@Component({
  selector: 'page-establishments',
  templateUrl: 'establishments.html',
})
export class EstablishmentsPage {

  public pet: string = "solicitudes";
  public establecimientosBuscar: any;
  public establecimientosBuscarMaster: any;
  public solicitudesUsuario: any;
  public solicitudesUsuarioMaster: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _DomSanitizer: DomSanitizer,
    private service: EstablishmentProvider, private loadingController: LoadingController,
    private global: GlobalProvider, private serviceRequest: RequestsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablishmentsPage');
  }

  ionViewDidEnter(){
    const loader = this.loadingController.create({
      content: 'Actualizando...'
    });
    loader.present();
    this.service.getAllEstablishments().subscribe(
      (data)=>{
        console.log(data);
        this.establecimientosBuscar = data;
        this.establecimientosBuscarMaster = data;
      },
      (error)=>{
        console.error(error);
        loader.dismiss();
      }
    );
    this.serviceRequest.getUserRequests(this.global._id).subscribe(
      (data)=>{
        console.log(data);
        this.solicitudesUsuario = data;
        this.solicitudesUsuarioMaster = data;
      },
      (error)=>{
        console.error(error);
        loader.dismiss();
      }
    );
    loader.dismiss();
  }

  initializeItemsEstablecimientos(){
    this.establecimientosBuscar = this.establecimientosBuscarMaster;
  }

  initializeItemsSolicitudes(){
    this.solicitudesUsuario = this.solicitudesUsuarioMaster;
  }
  
  gotToViewEstablishmentSaved(establecimiento: Establecimiento){
    console.log(establecimiento);
    this.navCtrl.push('EstablishmentsSavedModalPage', {establecimiento: establecimiento});
  }

  gotToViewEstablishmentSearch(establecimiento: Establecimiento){
    this.navCtrl.push('EstablishmentsSearchPage', {establecimiento: establecimiento});
  }
}
