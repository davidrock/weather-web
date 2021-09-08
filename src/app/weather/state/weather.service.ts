import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { CityService } from 'src/app/services/city.service';
import { Forecast } from 'src/app/shared';
import { environment } from 'src/environments/environment';
import { WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    constructor(private weatherStore: WeatherStore, private cityService: CityService, private http: HttpClient) {}

    getWeather(city: string): void {
        this.http
            .get<Forecast>(`${environment.weatherApiUrl}?q=${city}&appid=${environment.weatherApiKey}&units=metric`)
            .subscribe((forecast: Forecast) => {
                this.weatherStore.addUniqueWeather(forecast);
            });
    }
}
