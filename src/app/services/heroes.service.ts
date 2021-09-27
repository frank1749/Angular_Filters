import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../intefaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Heroe[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarHeroes();
  }

  detalles( id: string) {
    return this.http.get(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`);
  }

  cargarHeroes() {
    return this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
    .subscribe( (res: Heroe[]) => {
      this.heroes = res;
      console.log(this.heroes);
    })
  }
}
