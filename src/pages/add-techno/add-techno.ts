// on aura besoin de typer donc on importe l'interface Technology
import { Technology } from './../../models/technology';
// on aura besoin de DataService qui contient le tableau des technos à modifier
import { DataService } from './../../providers/data/data.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-techno',
  templateUrl: 'add-techno.html',
})
export class AddTechnoPage {

  categories: string[]
  technology: Technology = {name: '', category: ''}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService: DataService) {
  }

  ionViewWillLoad() {
    this.categories = this.dataService.getAllCategories()
  }

  addTechnology() {
    this.dataService.addTechnology(this.technology)
    // vider le champ après soumission et pointer vers un nouvel objet
    // et pas le nouvel objet qui s'impose sur les précédentes
    this.technology = {name: '', category: ''}
  }


}
