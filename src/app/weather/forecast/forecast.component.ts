import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Forecast } from '../../shared/models/forecast.model';
import { WeatherQuery } from '../state/weather.query';
import { WeatherService } from '../state/weather.service';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit, OnDestroy {
    defaultCities: string[];
    citiesForecast$: Observable<Forecast[] | undefined>;
    unsubscribe$ = new Subject();

    constructor(private weatherService: WeatherService, weatherQuery: WeatherQuery) {
        this.defaultCities = ['Rome', 'Warsaw', 'Amsterdam', 'Madrid', 'London'];
        this.citiesForecast$ = weatherQuery.forecast$.pipe(take(5), takeUntil(this.unsubscribe$));
    }

    ngOnInit(): void {
        this.defaultCities.forEach(city => this.weatherService.getWeather(city));
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
