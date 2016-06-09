import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class MoviesService{
    constructor (private _http: Http) {}

    getMovies (lt: string) {
        return this._http.get('http://www.tordnet.com/angular/php/rotten-movies.php?listType='+lt, true)
            .map(res => res.json());
    }

    getPoster (id: string, isTitle: Boolean) {
        let preUrl = "http://www.omdbapi.com/?";
        isTitle ? preUrl = preUrl+"t=" : preUrl = preUrl+"i=tt";
        return this._http.get(preUrl+id, true)
            .map(res => res.json());
    }
}