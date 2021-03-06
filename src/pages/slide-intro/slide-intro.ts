import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-intro',
  templateUrl: 'slide-intro.html',
})

export class SlideIntroPage {

  // -------------------------------------------------------------------------------------------------------------------
  // Attributes
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * Slide from the start application.
   */
  public slides: any = [
    {
      title: "Bienvenido a Mascotas.ga!",
      description: "Mi nombre es Maxi, acabo de conocerte y te quiero!!",
      image: "../assets/imgs/slide-image-1.png",
    },
    {
      title: "¿Que es Mascotas.ga?",
      description: "<b>Mascotas.ga</b> basicamente es una muestra de amor a tus mascotas.<br> <b>Osea a mi!!</b>",
      image: "../assets/imgs/slide-image-2.png",
    },
    {
      title: "¿Que esperas para usarla?",
      description: "<b>Amor</b> es todo lo que nosotros necesitamos y creeme, con esta aplicación lo lograras.",
      image: "../assets/imgs/slide-image-3.png",
    }
  ];


  // -------------------------------------------------------------------------------------------------------------------
  // Contructors
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * Construct the component.
   * @param navCtrl Navigation controller.
   * @param navParams Navigation parameters.
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  // -------------------------------------------------------------------------------------------------------------------
  // Events
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * Event when view did load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideIntroPage');
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }

  // -------------------------------------------------------------------------------------------------------------------
  // Methods
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * Go to login page.
   */
  goLoginPage() {
    this.navCtrl.setRoot('LoginPage');
  }
}
