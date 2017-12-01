import { Technology } from './../../models/technology';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  categories: string[] = ['Frontend', 'Backend', 'FullStack', 'Hybride', 'Autre']

  constructor() {
    console.log('Hello DataProvider Provider');
  }

  technologies: Technology[] = [
    {name: 'Angular', category: 'Frontend'},
    {name: 'PWA', category: 'Hybride'},
    {name: 'Ionic', category: 'Hybride'},
    {name: 'Node', category: 'Backend'}
  ]

  getAllTechnologies () {
    return this.technologies
  }

  getAllCategories () {
    return this.categories
  }

  search(term: string) {
    // pour chaque tecnology qu'on appelle tech on verifie si tla proprite "name"
    // contient le "term" tapé dans la searchBar si true => generation d'un sous-ensemble du tableau 
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term))
  }

}
