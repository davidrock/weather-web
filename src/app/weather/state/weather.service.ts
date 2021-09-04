import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast } from 'src/app/shared';
import { environment } from 'src/environments/environment';
import { WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    constructor(private weatherStore: WeatherStore, private http: HttpClient) {}

    getWeather(city: string): void {
        this.http
            .get<Forecast>(`${environment.weatherApiUrl}?q=${city}&appid=${environment.weatherApiKey}`)
            .subscribe((data: Forecast) => {
                this.weatherStore.update({ forecast: data });
            });
    }
}
