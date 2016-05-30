import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class MoviesService{
    constructor (private _http: Http) {}

    getRottenMovies () {
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=json&appid=1f58e97dac0c67d6801dfb565e71b0f0')
            .map(res => res.json());
        //http://api.rottentomatoes.com/api/public/v1.0/movies.json?page_limit=10&page=1&apikey=pjjkpm57xrm7gs63spvvaumt&q=
        //http://api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=xml&appid=1f58e97dac0c67d6801dfb565e71b0f0
    }
}