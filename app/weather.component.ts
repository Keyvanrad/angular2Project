import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";

@Component({
    selector: 'weather',
    template: `
        <title>Weather</title>
        <button style="margin-top: 40px" (click)="getTorontoWeather()">Get Weather Info</button>
        <p>{{torontoWeather}}</p>
    `,
    providers: [WeatherService]
})

export class WeatherComponent {

    torontoWeather: string;

    constructor(private _mvsService: WeatherService){}

    getTorontoWeather() {
        this._mvsService.getTorontoWeather().subscribe(
            data => this.torontoWeather = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }
}