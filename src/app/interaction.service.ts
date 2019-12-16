import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  
  apiUrl: string = 'https://swapi.co/api';
 // peopleUrl: string ='https://swapi.co/api/people';
  //queryUrl: string = '?search=';


  constructor ( private _http: HttpClient) { }

  getFilms() {
    //old return this._http.get<any[]>(this.apiUrl + '/films/');
    return this._http.get(this.apiUrl + '/films/');

  }

  getPeople() {
    return this._http.get(this.apiUrl + '/people/');
  }

 getMovieData(url:string)
 {
     return this._http.get("https://swapi.co/api/films/" +  url.slice(-2));
 }
  
  getPeopleData(url:string)
    {
      return this._http.get("https://swapi.co/api/people/" + url.slice(-2));
    }
  getPlanetData(url:string)
    {
     return this._http.get("https://swapi.co/api/planets/" + url.slice(-2));    
    }

  getVehicleData(url:string)
    {
      return this._http.get("https://swapi.co/api/vehicles/" + url.slice(-2));    }

  //*This is to get all the vehicles from all movies*//    
  getCarData()  
  {
    return this._http.get<any[]>(this.apiUrl + '/vehicles/');
  }
 // search(terms: Observable<string>) {
   // return terms.debounceTime(400)
  //    .distinctUntilChanged()
  //    .switchMap(term => this.searchEntries(term));
 // }
 // searchEntries(term) {
//    return this._http
//        .get(this.peopleUrl + this.queryUrl + term)
     //   .subscribe(res => res.json());
  }



