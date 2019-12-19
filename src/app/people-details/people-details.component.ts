import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { Ivehicle } from '../vehicle';




@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  people: any;
  planet: any;
  
 // cars$: Ivehicle[];
 // name:any;

  constructor(private route: ActivatedRoute, private interactionService: InteractionService,
    ) { }

  ngOnInit() {
    this.nameMethod();
    this.planetMethod();
 //   this.vehicleMethod();
   // this.carMethod();
 // console.log(this.route);
  }

  nameMethod()
  {
  let name = this.route.snapshot.paramMap.get('url');
  this.interactionService.getPeopleData(name).subscribe(p =>{
  this.people = p;
  });
 }

  planetMethod()
  {
    let name = this.route.snapshot.paramMap.get('url');
    this.interactionService.getPlanetData(name).subscribe(w =>{
    this.planet = w;
  });
 }

 // vehicleMethod()
//  {
//   this.route.snapshot.paramMap.get('id');
//   this.interactionService.getVehicleData(1).subscribe(res =>{
//   this.vehicle$ = res;
//   }

   //)
// }
 //*This is to get all the vehicles from all movies*//    
 //carMethod() {
 // let name = this.route.snapshot.paramMap.get('url');
 // this.interactionService.getCarData()
 // .subscribe(data => {
 //   this.cars$ = data.results;
//  });
//*This is to get all the vehicles from all movies*//    
//}
}


