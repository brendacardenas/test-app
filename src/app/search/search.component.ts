import { Component, OnInit} from '@angular/core';
import { InteractionService } from '../interaction.service';


 /**starwars search */
//import { InteractionService } from '../interaction.service';
//import { BrowserModule } from "@angular/platform-browser";
//import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { HttpClientModule, HttpClient } from "@angular/common/http";
 /**starwars search */


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

persons$: Ipeople[] = [];
movies$: Imovie[] = [];

  private loading: boolean = false;



  constructor(private itunes: InteractionService) { }

  ngOnInit() {
   
  }
 doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => (this.loading = false));
 
}
}

