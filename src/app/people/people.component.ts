import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Ipeople } from '../people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

    persons$: Ipeople[] = [];
    
      constructor( private interactionService: InteractionService) {}
     
      ngOnInit() {
        return this.interactionService.getPeople()
        .subscribe(res => {
          this.persons$ = res.results;
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
    