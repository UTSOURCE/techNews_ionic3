import { Schedule } from './../../models/schedule';
import { Technology } from './../../models/technology';
// import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  categories: string[] = ['Frontend', 'Backend', 'FullStack', 'Hybride', 'Autre']

  technologies: Technology[] = [
    {name: 'Angular', category: 'Frontend'},
    {name: 'PWA', category: 'Hybride'},
    {name: 'Ionic', category: 'Hybride'},
    {name: 'Node', category: 'Backend'}
  ]

  schedules: Schedule[] = []

  priorities: string[] = ['basse', 'moyenne', 'haute']


  constructor() {
    console.log('Hello DataProvider Provider');
  }

  
  getAllTechnologies () {
    return this.technologies
  }

  getAllCategories () {
    return this.categories
  }

  getAllPriorities () {
    return this.priorities
  }

  search(term: string) {
    // pour chaque tecnology qu'on appelle tech on verifie si tla proprite "name"
    // contient le "term" tapé dans la searchBar si true => generation d'un sous-ensemble du tableau 
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term))
  }

  addTechnology(technology: Technology) {
    this.technologies = [...this.technologies, technology]
    console.log(this.technologies)
  }

  createSchedule(schedule: Schedule) {
    this.schedules = [...this.schedules, schedule]
    console.log(this.schedules)
  }

  getAllSchedules() {
    return this.schedules
  }

}
