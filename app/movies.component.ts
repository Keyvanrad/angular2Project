import { Component, OnInit } from '@angular/core';
import {MoviesService} from "./movies.service";

@Component({
    selector: 'movies',
    template: `
        <title>Movies</title>
        <form>
            <input type="radio" name="category" class="radio" (click)="getTomatoMovies('opening')" checked> Opening
            <input type="radio" name="category" (click)="getTomatoMovies('boxoffice')"> Canada Box Office
            <input type="radio" name="category" (click)="getTomatoMovies('upcoming')"> Upcoming!
        </form>
        <button style="margin-top: 40px" (click)="getTomatoMovies('opening')">Opening</button>
        <button style="margin-top: 40px" (click)="getTomatoMovies('boxoffice')">Canada Box Office</button>
        <button style="margin-top: 40px" (click)="getTomatoMovies('upcoming')">Upcoming!</button>
        <!--<p>{{moviesResultList ? moviesResultList[0].alternate_ids.imdb : ""}}</p>-->
        <p>{{selectedMovie?.title}}</p>
    `,
    providers: [MoviesService]
})

export class MoviesComponent {

    moviesResult: string;
    //moviesResultList: {};
    selectedMovie: {};

    constructor(private _mvsService: MoviesService){}

    getTomatoMovies(queryType: string) {
        this._mvsService.getMovies(queryType).subscribe(
            data => {
                this.moviesResult = JSON.stringify(data);
                //this.moviesResultList = JSON.parse(this.moviesResult).movies;
                this.selectedMovie = JSON.parse(this.moviesResult).movies[0];
           },
            error => alert(error),
            () => console.log("Finished")
        );
    }
}