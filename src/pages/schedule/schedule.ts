import { DataService } from './../../providers/data/data.service';
import { Technology } from './../../models/technology';
import { Schedule } from './../../models/schedule';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  // on démarre avec un schedule vide
  schedule: Schedule = {
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
              private dataService: DataService) {
  }

  ionViewWillLoad() {
    this.categories = this.dataService.getAllCategories();
    this.priorities = this.dataService.getAllPriorities();
  }

  createSchedule() {
    this.dataService.createSchedule(this.schedule);
    this.resetSchedule();
  }

  resetSchedule() {
    this.schedule = {
      date: null,
      duration: 0,
      priority: '',
      remark: '',
      technology: {name: '', category: ''}
    }
  }



}
