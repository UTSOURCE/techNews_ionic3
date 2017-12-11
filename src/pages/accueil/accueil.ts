import { Technology } from './../../models/technology';
import { DataService } from './../../providers/data/data.service';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  technologies: Technology[]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService: DataService, 
              // private loadingCtrl: LoadingController
            ) {
  }

  // ionViewWillLoad n'est exécuté qu'une seule fois
  // => le tableau des technologies ne présentera donc pas les nouveaux ajouts
  // => pour cela nécessité d'un autre LifeCycleHook : ionViewWillEnter()
  // ionViewWillLoad() {
  ionViewWillEnter() {
    // // exemple de mise en place d'un loader
    // const loader = this.loadingCtrl.create({
    //   content:  'veuillez patienter svp',
    //   duration: 2000
    // });
    // loader.present();
    
    // this.technologies = this.dataService.getAllTechnologies()
    
    // ..suite à l'utilisation de Dexie, c'est une Promise qui est retournee
    this.dataService.getAllTechnologies().then(data => this.technologies = data)
   
    // console.log(this.technologies)
    // loader.dismiss() // une fois que les donnees sont affichees
  }

  // on cree une methode search() qui sera notre event handler
  search(event) {
    // on recupere la saisie de l'utilisateur [search() devra être creee dans dataService]
    this.technologies = this.dataService.search(event.target.value.trim())
  }


}
