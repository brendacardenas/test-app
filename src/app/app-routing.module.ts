import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ PeopleComponent } from './people/people.component';
import{ FilmDetailsComponent } from './film-details/film-details.component';
import { SearchComponent } from './search/search.component';
import { PeopleDetailsComponent} from './people-details/people-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'film-details/:url', component: FilmDetailsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'people-details/:url', component: PeopleDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
                                  FilmDetailsComponent,
                                  PeopleDetailsComponent,]


