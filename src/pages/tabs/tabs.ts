import { ScheduleListPage } from './../schedule-list/schedule-list';
import { Component } from '@angular/core';

import { AddTechnoPage } from './../add-techno/add-techno';
import { SchedulePage } from './../schedule/schedule';
import { AccueilPage } from './../accueil/accueil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = AddTechnoPage;
  tab3Root = SchedulePage;
  tab4Root = ScheduleListPage;

  constructor() {

  }
}
