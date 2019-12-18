import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],

})
export class FilmDetailsComponent implements OnInit {

  movie: any;
  planet: any;
  constructor(private route: ActivatedRoute, private interactionService: InteractionService,
    ) { }
    
  ngOnInit() {
    this.idMethod();
    this.planetMethod();
  }

 idMethod()
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
}
