import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';


 /**starwars search */ 
class SearchItem {
  constructor(
    public name: string,
    public id: number,
    public title: string,
  ) {}
}
 /**starwars search */


@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  
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

  //getVehicleData(id:number)
  //  {
    //  return this._http.get("https://swapi.co/api/vehicles/" + url.slice(-2));    
 //   return this._http.get<any>(`${this.apiUrl}vehicles/${id}?format=json`)
 //   .pipe(
 //   );
 //   }

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


}
   
