import { DataService } from './../../providers/data/data.service';
import { Schedule } from './../../models/schedule';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-schedule-list',
  templateUrl: 'schedule-list.html',
})
export class ScheduleListPage {

  schedules: Schedule[] = []

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService: DataService) {
  }

  // willEnter ...car  on veut que ça se passe avant que la vue soit loadée
  ionViewWillEnter() {
    this.schedules = this.dataService.getAllSchedules() 
  }

}
