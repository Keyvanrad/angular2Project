import { Component, OnInit } from '@angular/core';
import {MoviesService} from "./movies.service";

@Component({
    selector: 'movies',
    template: `
        <title>Movies</title>
        <button style="margin-top: 40px" (click)="getTomatoMovies('opening')">Opening</button>
        <button style="margin-top: 40px" (click)="getTomatoMovies('boxoffice')">Canada Box Office</button>
        <button style="margin-top: 40px" (click)="getTomatoMovies('upcoming')">Upcoming!</button>
        <p>{{moviesResult}}</p>
    `,
    providers: [MoviesService]
})

export class MoviesComponent {

    moviesResult: string;

    constructor(private _mvsService: MoviesService){}

    getTomatoMovies(queryType: string) {
        this._mvsService.getMovies(queryType).subscribe(
            data => this.moviesResult = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }
}