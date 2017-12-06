import Dexie from 'dexie';
import { Schedule } from './../../models/schedule';
import { Technology } from './../../models/technology';
// import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  // variable pour Dexie
  db;

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
    this.db = new Dexie('veilletechno')
    this.db.version(1).stores({
      schedule: '++id, name',
      technologies: '++id'
    })
  }

  // getAllTechnologies () {
  //   return this.technologies
  // }
  
  getAllTechnologies(): Dexie.Promise<Technology[]> {
   return this.db.technologies
          .toArray()
          .then(data => {
            console.log(data)
          })
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
