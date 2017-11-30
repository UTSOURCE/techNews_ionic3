import { Technology } from './../../models/technology';
import { DataService } from './../../providers/data/data.service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  technologies: Technology[]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService: DataService, 
              private loadingCtrl: LoadingController) {
  }

  ionViewWillLoad() {
    // // exemple de mise en place d'un loader
    // const loader = this.loadingCtrl.create({
    //   content:  'veuillez patienter svp',
    //   duration: 2000
    // });
    // loader.present();
    this.technologies = this.dataService.getAllTechnologies()
    // console.log(this.technologies)
    // loader.dismiss() // une fois que les donnees sont affichees
  }




}
