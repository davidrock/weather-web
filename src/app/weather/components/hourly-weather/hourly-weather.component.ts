import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { Forecast } from 'src/app/shared';
import { WeatherQuery } from '../../state/weather.query';

@Component({
    selector: 'app-hourly-weather',
    templateUrl: './hourly-weather.component.html',
    styleUrls: ['./hourly-weather.component.scss'],
})
export class HourlyWeatherComponent {
    selectedCity$: Observable<Forecast | undefined>;

    optWindy: AnimationOptions;

    constructor(private weatherQuery: WeatherQuery) {
        this.selectedCity$ = this.weatherQuery.selectedCity$;

        this.optWindy = {
            path: 'assets/animations/windy-cloud.json',
        };
    }

    // ngOnInit(): void {}

    styles: Partial<CSSStyleDeclaration> = {
        maxWidth: '60px',
        margin: '0 auto',
    };
}
