import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { WeatherQuery } from '../state/weather.query';
import { WeatherService } from '../state/weather.service';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
    defaultCities: string[];
    citiesForecast$: Observable<Forecast[] | undefined>;

    constructor(private weatherService: WeatherService, weatherQuery: WeatherQuery) {
        this.defaultCities = ['Rome', 'Warsaw', 'Amsterdam', 'Madrid', 'London'];
        this.citiesForecast$ = weatherQuery.forecast$.pipe(
            take(5),
            tap(forecast => console.log(forecast)),
        );
    }

    ngOnInit(): void {
        // this.defaultCities.forEach(city => this.weatherService.getWeather(city));
    }
}
