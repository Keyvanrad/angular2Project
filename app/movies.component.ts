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
        <table *ngIf="!error">
        <thead>
        <tr>
        <th>Rotten</th><th>Imdb</th><th>Movie</th><th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let m of moviesResultObj" class="clickable" [class.selected]="m.id === selectedMovieId" (click)="selectMovie(m)">
        <td>{{m?.ratings.critics_score}}</td><td>{{m?.ratings.audience_score}}</td><td>{{m?.title}}</td>
        </tr>
        </tbody>
        </table>
    `,
    providers: [MoviesService]
})

export class MoviesComponent {

    moviesResult: string;
    moviesResultObj: {};
    category: string;
    selectedMovieId: number;
    selectedMovie: {};

    constructor(private _mvsService: MoviesService){}

    ngOnInit() {

        let storedCategory = sessionStorage['selectedCategory'];
        if (storedCategory) {
            this.category = storedCategory;
            this.getTomatoMovies(storedCategory);
            document.getElementById(storedCategory)['checked'] = true;
        } else
        {
            this.category = 'opening';
            this.getTomatoMovies('opening');
        }

    }

    getTomatoMovies(queryType: string) {
        sessionStorage['selectedCategory'] = queryType;
        this.category = queryType;
        this._mvsService.getMovies(queryType).subscribe(
            data => {
                this.moviesResult = JSON.stringify(data);
                this.moviesResultObj = JSON.parse(this.moviesResult).movies;

                let storedMovieId = sessionStorage['selectedMovieId'+queryType];
                if (storedMovieId) {
                    this.selectedMovieId = storedMovieId;
                    //TODO get the movie
                } else {

                    this.selectedMovie = JSON.parse(this.moviesResult).movies[0];
                    this.selectedMovieId = this.selectedMovie['id'];
                    sessionStorage['selectedMovieId'+queryType] = this.selectedMovieId;
                }
           },
            error => alert(error),
            () => console.log("Finished")
        );
    }

    selectMovie(m: any) {
        console.log("--------MOVIE SELECTED------"+ m.id);
        sessionStorage['selectedMovieId'+this.category] = m.id;
        this.selectedMovieId = m.id;
        this.selectedMovie = m;
    }
}