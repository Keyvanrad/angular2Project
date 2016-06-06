import { Component, OnInit } from '@angular/core';
import {MoviesService} from "./movies.service";

@Component({
    selector: 'movies',
    template: `
        <title>Movies</title>
        <form>
            <input type="radio" name="category" id="opening" (click)="getTomatoMovies('opening')" checked> Opening
            <input type="radio" name="category" id="boxoffice" (click)="getTomatoMovies('boxoffice')"> Canada Box Office
            <input type="radio" name="category" id="upcoming" (click)="getTomatoMovies('upcoming')"> Upcoming!
        </form>
        <p>{{selectedMovie?.title}}</p>
    `,
    providers: [MoviesService]
})

export class MoviesComponent {

    moviesResult: string;
    category: string;
    selectedMovieId: number;
    selectedMovie: {};

    constructor(private _mvsService: MoviesService){}

    ngOnInit() {

        let storedCategory = sessionStorage['selectedCategory'];
        if (storedCategory) {
            this.getTomatoMovies(storedCategory);
            document.getElementById(storedCategory).checked = true;
        } else
        {
            this.getTomatoMovies('opening');
        }

    }

    getTomatoMovies(queryType: string) {
        sessionStorage['selectedCategory'] = queryType;
        this._mvsService.getMovies(queryType).subscribe(
            data => {
                this.moviesResult = JSON.stringify(data);
                //this.moviesResultList = JSON.parse(this.moviesResult).movies;
                this.selectedMovie = JSON.parse(this.moviesResult).movies[0];
                this.selectedMovieId = this.selectedMovie['alternate_ids'].imdb;
                console.log("-----ID-----"+this.selectedMovieId);
           },
            error => alert(error),
            () => console.log("Finished")
        );
    }
}