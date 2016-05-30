import { Component, OnInit } from '@angular/core';
import {MoviesService} from "./movies.service";

@Component({
    selector: 'movies',
    templateUrl: 'app/movies.component.html',
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