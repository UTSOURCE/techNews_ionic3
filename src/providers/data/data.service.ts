import Dexie from 'dexie';
import { Schedule } from './../../models/schedule';
import { Technology } from './../../models/technology';
// import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  // variable pour faire du CRUD puisque lorsque l'on utilisera Dexie
  db;

  
  
  // Une fois que la gestion du stockage via IndexedDB par Dexie est implémentée => plus besoin des données en dur
  // technologies: Technology[] = [
    //   {name: 'Angular', category: 'Frontend'},
    //   {name: 'PWA', category: 'Hybride'},
    //   {name: 'Ionic', category: 'Hybride'},
    //   {name: 'Node', category: 'Backend'}
    // ]
    
    technologies: Technology[]
    
    schedules: Schedule[] = []
    
  categories: string[] = ['Frontend', 'Backend', 'FullStack', 'Hybride', 'Autre']
  
  priorities: string[] = ['basse', 'moyenne', 'haute']


  constructor() {
    // creation d'une nouvelle base
    this.db = new Dexie('veilletechno')
   // on crée un 1ère version et on definit les stores ou tables à stocker
    this.db.version(1).stores({
      schedules: '++id, name',
      technologies: '++id'
    })
  }

  // getAllTechnologies () {
  //   return this.technologies
  // }
  
  getAllTechnologies(): Dexie.Promise<Technology[]> {
    // return this.technologies
    return this.db.technologies.toArray()
                                // .then(data => {
                                //   console.log(data)
                                //   return data
                                // })
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
    // this.technologies = [...this.technologies, technology]
    // console.log(this.technologies)

    // ajout en base indexedDB avec Dexie via la methode add() qui prend un objet en parametre
    this.db.technologies.add(technology)
  }

  createSchedule(schedule: Schedule) {
    // this.schedules = [...this.schedules, schedule]
    // console.log(this.schedules)
  
    
    this.db.schedules.add(schedule)
  }

  getAllSchedules(): Dexie.Promise<Schedule[]> {
    // return this.schedules

    return this.db.schedules.toArray()
  }

}
