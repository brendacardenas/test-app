import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from '../movie';
import { Ipeople } from '../people';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  persons$: Ipeople[] = [];
  movies$: Imovie[] = [];



  constructor() { }

  ngOnInit() {
  }

}
