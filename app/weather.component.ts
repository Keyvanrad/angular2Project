import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators} from '@angular/common';
import { WeatherService } from "./weather.service";

@Component({
    selector: 'weather',
    template: `
        <title xmlns="http://www.w3.org/1999/html">Weather</title>
        <button style="margin-top: 40px" (click)="parseObject()">Get Weather Info</button>
        <p id="ct">{{result?.city?.name}}</p>
        <form [ngFormModel]="cityForm" (submit)="addCity($event)">
          <input [ngFormControl]="cityForm.controls.name" placeholder="enter city" [(ngModel)]="aaa"/>
          <button type="submit">Add</button>
        </form>
    `,
    providers: [WeatherService]
})

export class WeatherComponent {

    torontoWeather: string;
    result: {};
    cityForm: ControlGroup;

    constructor(private _mvsService: WeatherService, private _fb: FormBuilder){
        this.cityForm = _fb.group({
           name: ['', Validators.required]
        });
    }

    ngOnInit () {
        this._mvsService.getTorontoWeather().subscribe(
            data => this.torontoWeather = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }

    parseObject() {
        this.result = JSON.parse(this.torontoWeather);
    }

    addCity(event) {
        console.log("---Submit---");
        event.preventDefault();
    }
}