import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class MoviesService{
    constructor (private _http: Http) {}

    getRottenMovies () {
        return this._http.get('http://www.tordnet.com/angular/php/rotten-movies.php', true)
            .map(res => res.json());
    }
}