import { Component, OnDestroy } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { WeatherQuery } from '../../state/weather.query';

@Component({
    selector: 'app-hourly-weather',
    templateUrl: './hourly-weather.component.html',
    styleUrls: ['./hourly-weather.component.scss'],
})
export class HourlyWeatherComponent implements OnDestroy {
    selectedCity$: Observable<Forecast | undefined>;
    unsubscribe$ = new Subject();
    optWindy: AnimationOptions;

    constructor(private weatherQuery: WeatherQuery) {
        this.selectedCity$ = this.weatherQuery.selectedCity$.pipe(takeUntil(this.unsubscribe$));

        this.optWindy = {
            path: 'assets/animations/windy-cloud.json',
        };
    }

    styles: Partial<CSSStyleDeclaration> = {
        maxWidth: '60px',
        margin: '0 auto',
    };

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
