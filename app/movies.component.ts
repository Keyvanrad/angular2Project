import { Component, OnInit } from '@angular/core';
import {MoviesService} from "./movies.service";

@Component({
    selector: 'movies',
    template: `
        <title>Movies</title>
        <button style="margin-top: 40px" (click)="getTomatoMovies()">Get Rotten Data</button>
        <p>{{tomatoMovies}}</p>
    `,
    providers: [MoviesService]
})

export class MoviesComponent {

    tomatoMovies: string;

    constructor(private _mvsService: MoviesService){}

    getTomatoMovies() {
        this._mvsService.getRottenMovies().subscribe(
            data => this.tomatoMovies = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }
}