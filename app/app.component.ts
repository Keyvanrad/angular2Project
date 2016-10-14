import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { MoviesComponent } from './movies.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { MoviesService } from "./movies.service";
import { WeatherService } from "./weather.service";
import { WeatherComponent } from "./weather.component";

@Component({
  selector: 'my-app',
  template: `
  <link rel="stylesheet" type="text/css" href="/node_modules/semantic-ui/dist/semantic.min.css">
  <script src="/node_modules/semantic-ui/dist/semantic.min.js"></script>
  <style>
  @media screen and (max-width: 400px) {
    nav {
      display: none;
    }
  }
  </style>
  <div style="float: right"><img src="/assets/stackMenuIcon.svg" width="64" height="48"></div>
  <h2 class="ui header">
  <img src="/assets/Angular2logo.png">
      <div class="content">
        {{title}}
        <div class="sub header">{{description}}</div>
      </div>
  </h2>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Movies']">Movies</a>
      <a [routerLink]="['Weather']">Weather</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    MoviesService,
    WeatherService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesComponent
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherComponent
  }
])
export class AppComponent {
  title = 'The Main Dashboard';
  description = 'Based on Angular2 Framework';
}
