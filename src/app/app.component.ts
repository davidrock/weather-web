import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Forecast } from './shared';
import { WeatherQuery } from './weather/state/weather.query';
import { WeatherService } from './weather/state/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'weather-forecaster';
    forecast$: Observable<Forecast[]>;
    form: FormGroup;

    constructor(private weatherService: WeatherService, private weatherQuery: WeatherQuery, private fb: FormBuilder) {
        this.forecast$ = this.weatherQuery.forecast$ as Observable<Forecast[]>;
        this.form = this.fb.group({
            city: '',
        });
    }

    click(): void {
        this.weatherService.getWeather(this.form.value.city);
    }
}
