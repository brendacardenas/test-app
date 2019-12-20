import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Film, Vehicle,  } from './movie';

 /**starwars search */ 
class SearchItem {
  constructor(
    public name: string,
    public title: string,
  ) {}
}
 /**starwars search */


@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  TAG = 'InteracionService: ';
  apiUrl: string = 'https://swapi.co/api';
  
  /**starwars search */
results: SearchItem[];
 loading: boolean;
 apiRoot: string ='https://swapi.co/api/people';
 queryUrl: string = '?search=';
 /**starwars search */

  constructor ( private _http: HttpClient) { 
   /**starwars search */
 this.results = [];
 this.loading = false;
    /**starwars search */ 
  }
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


  getVehicle(name:string)
    {
     //return this._http.get("https://swapi.co/api/vehicles/" + url.slice(-2));    
     return this._http.get<Vehicle[]>(`${this.apiUrl}vehicles/${vehicleId}`)
    }

  //*This is to get all the vehicles from all movies*//    
  //getCarData()  
  //{
  //  return this._http.get<any[]>(this.apiUrl + 'vehicleId');
  //}

   /**starwars search */
   search(search: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?search=${search}`;
       this._http
        .get(apiURL)
         .toPromise()
         .then(
          res => {
             // Success
             this.results = res.results.map(res => {
              return new SearchItem(res.name);
            });
            resolve();
           },
           msg => {
             // Error
             reject(msg);
          }
         );
     });
    return promise;
   }
    /**starwars search */


    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error(`${this.TAG} An error occurred:`, error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `${this.TAG} Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        `${this.TAG} Something bad happened; please try again later.`);
    }
  
  }

   
