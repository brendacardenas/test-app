import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { SearchComponent } from './search/search.component';
import { InteractionService } from './interaction.service';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleBlockComponent } from './people/people-block/people-block.component';
import { FilmBlockComponent } from './home/film-block/film-block.component';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    HomeComponent,
    FilmDetailsComponent,
    SearchComponent,
    PeopleDetailsComponent,
    PeopleBlockComponent,
    FilmBlockComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
