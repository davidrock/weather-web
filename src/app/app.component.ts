import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Forecast } from './shared/models/forecast.model';
import { WeatherQuery } from './weather/state/weather.query';
import { WeatherService } from './weather/state/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'weather-forecaster';
}
