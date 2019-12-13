import { Component, OnInit, Input } from '@angular/core';
import { Ipeople } from 'src/app/people';

@Component({
  selector: 'app-people-block',
  templateUrl: './people-block.component.html',
  styleUrls: ['./people-block.component.scss']
})
export class PeopleBlockComponent implements OnInit {
@Input() persons: Ipeople[] = [];

  constructor() { }

  ngOnInit() {
  }

}
