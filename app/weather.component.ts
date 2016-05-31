import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";

@Component({
    selector: 'weather',
    template: `
        <title>Weather</title>
        <button style="margin-top: 40px" (click)="parseObject()">Get Weather Info</button>
        <p id="ct">click here...</p>
    `,
    providers: [WeatherService]
})

export class WeatherComponent {

    torontoWeather: string;
    result: {};

    constructor(private _mvsService: WeatherService){}

    ngOnInit () {
        this._mvsService.getTorontoWeather().subscribe(
            data => this.torontoWeather = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }

    parseObject() {
        this.result = JSON.parse(this.torontoWeather);
        document.getElementById("ct").innerHTML = this.result.city.name;
    }
}