import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
    defaultCities: string[];

    constructor() {
        this.defaultCities = ['Rome', 'Paris', 'Amsterdam', 'Madrid'];
    }
}
