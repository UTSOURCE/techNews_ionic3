import { DataService } from './../../providers/data/data.service';
import { Technology } from './../../models/technology';
import { Schedule } from './../../models/schedule';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  // on démarre avec un schedule vide
  schedule: Schedule = {
    name: '',
    date: null,
    duration: 0,
    priority: '',
    remark: '',
    technology: {name: '', category: ''}
  }


  categories: string[];
  priorities: string[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService: DataService,
              private toastCtrl: ToastController) {
  }

  ionViewWillLoad() {
    this.categories = this.dataService.getAllCategories();
    this.priorities = this.dataService.getAllPriorities();
  }

  createSchedule() {
    this.dataService.createSchedule(this.schedule);

    // creation d'un toast (message de success)
    this.toastCtrl.create({
      message: 'votre tâche a été créée',
      duration: 2000,
      cssClass: 'ok'
    }).present()

    this.resetSchedule();
  }



  resetSchedule() {
    this.schedule = {
      name: '',
      date: null,
      duration: 0,
      priority: '',
      remark: '',
      technology: {name: '', category: ''}
    }
  }



}
