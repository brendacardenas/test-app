import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { InteractionService } from '../interaction.service';
/**testing */
import { Observable, } from 'rxjs';
import { Film, Vehicle } from '../movie';
/**testing */


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],

})
export class FilmDetailsComponent implements OnInit {

  Vehicle:  Array<string>
  movie: any;
  planet: any;
  //characters:any;
  /**testing */
  car: Vehicle[];
/**testing */

  constructor(private route: ActivatedRoute, private interactionService: InteractionService,
    ) { }
    
  ngOnInit() {
    this.movieMethod();
    this.planetMethod();
    this.vehicleMethod();
  }

 movieMethod()
  {
    let episode_id = this.route.snapshot.paramMap.get('url');
    this.interactionService.getMovieData(episode_id).subscribe(m =>{
    this.movie = m;
    })
  }

  planetMethod()
  {
    let name = this.route.snapshot.paramMap.get('url');
   this.interactionService.getPlanetData(name).subscribe(w =>{
  this.planet = w;
  })
 }
 vehicleMethod(){
   let name = this.route.snapshot.paramMap.get('name');
   this.interactionService.getVehicle(name).subscribe(c =>{
    this.car = c;
    })
    }
  }

