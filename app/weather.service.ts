import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class WeatherService{
    constructor (private _http: Http) {}

    getTorontoWeather () {
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=Toronto,ca&mode=json&appid=1f58e97dac0c67d6801dfb565e71b0f0')
            .map(res => res.json());

    }
}