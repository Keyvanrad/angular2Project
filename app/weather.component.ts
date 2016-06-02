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
          <label for="name">City</label>
          <div><input [ngFormControl]="cityForm.controls.name" placeholder="enter city"/></div>
          <div><input [ngFormControl]="cityForm.controls.continent" placeholder="enter continent"/></div>
          <button type="submit" [disabled]="!cityForm.valid">Add</button>
        </form>
    `,
    providers: [WeatherService]
})

export class WeatherComponent {

    torontoWeather: string;
    result: {};
    cityForm: ControlGroup;
    phpResult: any;

    constructor(private _mvsService: WeatherService, private _fb: FormBuilder){
        this.cityForm = _fb.group({
           'name': ['', Validators.required],
            'continent': ['', Validators.required]
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
        console.log("---Submitted Form Data---");
        this._mvsService.insertCity(this.cityForm.value);
        //    .subscribe(
        //    data => this.phpResult = JSON.stringify(data),
        //    error => alert(error),
        //    () => console.log("----Data Inserted----"+this.phpResult)
        //);
        event.preventDefault();
    }
}