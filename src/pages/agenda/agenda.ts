import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Cita } from "../../models/cita";
import { AgendaProvider } from '../../providers/agenda/agenda';
import { LoadingController } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  public agenda: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: AgendaProvider,
    private loadingController: LoadingController, public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  ionViewDidEnter(){
    const loader = this.loadingController.create({
      content: 'Actualizando...'
    });
    loader.present();
    const idUsuario: string = this.global._id;
    this.service.getAllAgenda(idUsuario).subscribe(
      (data)=>{
        console.log(data);
        this.agenda = data;
        loader.dismiss();
      },
      (error)=>{
        console.error(error);
        loader.dismiss();
      }
    )
    console.log('Refresco de la pagina');
  }

  goToViewEvent(cita: Cita, id: string, nombreAnimal: string){
    this.navCtrl.push('AgendaModalPage',{cita: cita, id: id, nombreAnimal: nombreAnimal});
  }

  goToChoseePet(){
    this.navCtrl.push('ChoosePetPage');
  }
}
