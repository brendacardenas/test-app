import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/movie';

@Component({
  selector: 'app-film-block',
  templateUrl: './film-block.component.html',
  styleUrls: ['./film-block.component.scss']
})
export class FilmBlockComponent implements OnInit {

 @Input() movies: Film[] = [];

  constructor() { }

  ngOnInit() {
  }

}
