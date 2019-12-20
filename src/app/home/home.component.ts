import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Film } from '../movie';
import {Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

movies$: Film[] = [];

// old movies$: Film[];
//episodes$: Film[];

  constructor( private interactionService: InteractionService, private router: Router) {}
 
  ngOnInit() {
   this.newMethod();
    //this.otherMethod();
  }
  
 newMethod() {
  this.interactionService.getFilms()
  .subscribe(data => {
    this.movies$ = data.results;
  });
 }
 
 
  catalogContent = [
    "This is a box",
    "This is a box",
    "This is a box",
    "This is a box",
    "This is a box",
    "This is a box",
  ]

  
 
}
