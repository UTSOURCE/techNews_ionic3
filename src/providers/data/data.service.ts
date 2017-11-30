import { Technology } from './../../models/technology';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor() {
    console.log('Hello DataProvider Provider');
  }

  technologies: Technology[] = [
    {name: 'Angular', category: 'Front'},
    {name: 'PWA', category: 'Hybride'},
    {name: 'Ionic', category: 'Hybride'},
    {name: 'Node', category: 'BAckend'}
  ]

  getAllTechnologies () {
    return this.technologies
  }

  search(term: string) {
    // pour chaque tecnology qu'on appelle tech on verifie si tla proprite "name"
    // contient le "term" tapé dans la searchBar si true => generation d'un sous-ensemble du tableau 
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term))
  }

}
