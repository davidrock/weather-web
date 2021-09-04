import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from './shared';
import { WeatherQuery } from './weather/state/weather.query';
import { WeatherService } from './weather/state/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'weather-forecaster';
    forecast$: Observable<Forecast | undefined>;

    constructor(private weatherService: WeatherService, private weatherQuery: WeatherQuery) {
        this.forecast$ = this.weatherQuery.forecast$;
    }

    ngOnInit(): void {
        this.weatherService.getWeather('Amsterdam');

        this.forecast$.subscribe(forecast => {
            console.log(forecast);
        });
    }
}
